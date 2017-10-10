from django.http import StreamingHttpResponse
from django.shortcuts import render
import requests
from datetime import date, timedelta, datetime
import time
import json

#set credentials here from DOST-ASTI
username = '<username>'
password = '<password>'


def home(request):
    return render(request, "rainfallmonitoringapp/index.html")


def latest_rainfall(request):
    if request.method == 'GET':
        get_dev_id = request.GET.get('dev_id')
        x = 1
        from_date = (date.today() - timedelta(days=x)).strftime("%Y-%m-%d")
        sensor_url = 'http://weather.asti.dost.gov.ph/web-api/index.php/api/data/' + str(
            get_dev_id) + '/from/' + from_date
        rr = requests.get(sensor_url, auth=(username, password))
        ddata = rr.json()
        vals = ddata['data']
        vals_len = len(vals)
        loc = ddata['location']
        mun = ddata['municipality']
        prov = ddata['province']
        lon = ddata['longitude']
        lat = ddata['latitude']
        dev_id = ddata['dev_id']
        if vals_len == 0:
            m_dict = {
                'dev_id': dev_id,
                'location': loc,
                'municipality': mun,
                'province': prov,
                'longitude': lon,
                'latitude': lat,
                'data': []
            }
        else:
            m_dict = {
                'dev_id': dev_id,
                'location': loc,
                'municipality': mun,
                'province': prov,
                'longitude': lon,
                'latitude': lat,
                'data': [ddata['data'][0]]
            }

        json_data = json.dumps(m_dict)
        return StreamingHttpResponse(json_data, content_type='application/json')


def rainfall(request):
    if request.method == 'GET':
        get_dev_id = request.GET.get('dev_id')
        sensor_url = 'http://weather.asti.dost.gov.ph/web-api/index.php/api/data/' + str(get_dev_id)
        rr = requests.get(sensor_url, auth=(username, password))
        ddata = rr.json()
        vals = sorted(ddata['data'], key=lambda d: d["dateTimeRead"])
        loc = ddata['location']
        mun = ddata['municipality']
        prov = ddata['province']
        lon = ddata['longitude']
        lat = ddata['latitude']
        dev_id = ddata['dev_id']
        m_dict = {
            'dev_id': dev_id,
            'location': loc,
            'municipality': mun,
            'province': prov,
            'longitude': lon,
            'latitude': lat,
            'data': []
        }

        if len(vals) > 0:
            for val in vals:
                ddate = val['dateTimeRead'].split('+')
                pattern = '%Y-%m-%d %H:%M:%S'
                epoch = int(time.mktime(time.strptime(ddate[0], pattern)))
                rain_val =  val['rain_value'] or 0.00
                m_dict['data'].append({
                    'rain_value': float(rain_val),
                    'dateTimeRead': epoch
                })
        else:
            m_dict['data'] = []
        json_data = json.dumps(m_dict)
        return StreamingHttpResponse(json_data, content_type='application/json')


def dlrainfall(request):
    #set the date range here
    x = 1
    from_date = (date.today() - timedelta(days=x)).strftime("%Y-%m-%d")
    to_date = (date.today()).strftime("%Y-%m-%d")
    print 'Checking rainfall station data from ' + from_date + ' to ' + to_date

    #get the list of all devices
    devices_url = 'http://weather.asti.dost.gov.ph/web-api/index.php/api/devices'
    r = requests.get(devices_url, auth=(username, password))
    data = r.json()

    #set parameters sensor type 2 for rainfall, 4 for waterlevel, 3 for Waterlevel & Rain; append the list below
    province = ['Agusan del Sur', 'Agusan del Norte', 'Surigao del Norte', 'Surigao del Sur']
    sensor_types = [2, 3]

    #get the rainfall sensors installed
    sensors = [x for x in data if (x['province'] in province and x['type_id'] in sensor_types)]
    convert_list = []

    for sensor in sensors:
        dev_id = sensor['dev_id']
        sensor_url = 'http://weather.asti.dost.gov.ph/web-api/index.php/api/data/' + str(dev_id) + '/from/' + from_date
        rr = requests.get(sensor_url, auth=(username, password))
        ddata = rr.json()
        #vals = sorted(ddata['data'], key=lambda d: d["dateTimeRead"])
        dev_id = ddata['dev_id']
        loc = ddata['location']
        lat = ddata['latitude']
        lon = ddata['longitude']
        vals = ddata['data']
        vals_len = len(vals)
        accum = 0
        date_acquired = 'No Data'
        still_raining = 'No Data'
        if vals_len > 0:
            if float(vals[0]['rain_value']) == 0.00:
                still_raining = 'No'
            else:
                rain_val = float(vals[0]['rain_value']) * 4
                still_raining = 'Yes ' + '(' + str(rain_val) + ' mm/hr)'
            date_acquired_to = str(vals[0]['dateTimeRead']).split('+')
            formatted_date_acquired_to = datetime.strptime(date_acquired_to[0], '%Y-%m-%d %H:%M:%S').strftime(
                '%b %d,%Y %I:%M%p')
            date_acquired_from = str(vals[vals_len - 1]['dateTimeRead']).split('+')
            formatted_date_acquired_from = datetime.strptime(date_acquired_from[0], '%Y-%m-%d %H:%M:%S').strftime(
                '%b %d,%Y %I:%M%p')
            date_acquired = formatted_date_acquired_from + ' to ' + formatted_date_acquired_to
            for val in vals:
                vall = float(val['rain_value']) or 0
                accum += vall
        new_list = [dev_id, loc, lat, lon, round(accum, 2), date_acquired, still_raining]
        convert_list.append(new_list)
    return StreamingHttpResponse(convert_list, content_type='application/json')
