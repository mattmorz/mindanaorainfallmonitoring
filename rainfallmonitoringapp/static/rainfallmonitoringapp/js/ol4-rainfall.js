/**
 * Created by Matt on 10/4/17.
 */
var rainfall = (function () {
    var jsonObj = {
        "type": "FeatureCollection",
        "features": [
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.234542, 8.229882]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Lanao del Norte",
                    "City_Municipality": "ABUNO",
                    "No": 1,
                    "region": "10",
                    "proper_name": "ABUNO",
                    "device_id": 138
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.089583, 7.676012]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Compostela Valley",
                    "City_Municipality": "AGUSAN BRIDGE COMPOSTELA",
                    "No": 2,
                    "region": "11",
                    "proper_name": "AGUSAN BRIDGE COMPOSTELA",
                    "device_id": 959
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.143663, 7.314996]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Compostela Valley",
                    "City_Municipality": "AGUSAN BRIDGE MARAGUSAN",
                    "No": 3,
                    "region": "11",
                    "proper_name": "AGUSAN BRIDGE MARAGUSAN",
                    "device_id": 1285
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [24.80717, 8.32162]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Bukidnon",
                    "City_Municipality": "AGUSAN CANYON BRIDGE",
                    "No": 4,
                    "region": "10",
                    "proper_name": "AGUSAN CANYON BRIDGE",
                    "device_id": 1858
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.94108, 8.550003]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Agusan del Sur",
                    "City_Municipality": "AGUSAN DEL SUR, PROVINCIAL CAPITOL",
                    "No": 5,
                    "region": "13",
                    "proper_name": "AGUSAN DEL SUR, PROVINCIAL CAPITOL",
                    "device_id": 739
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.535, 7.43]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Cotabato",
                    "City_Municipality": "ALAMADA",
                    "No": 6,
                    "region": "12",
                    "proper_name": "ALAMADA",
                    "device_id": 596
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.01145, 8.506214]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Agusan del Sur",
                    "City_Municipality": "ALEGRIA",
                    "No": 7,
                    "region": "13",
                    "proper_name": "ALEGRIA",
                    "device_id": 566
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.586667, 7.158333]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Cotabato",
                    "City_Municipality": "ALEOSAN",
                    "No": 8,
                    "region": "12",
                    "proper_name": "ALEOSAN",
                    "device_id": 1118
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.01519, 7.28042]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Compostela Valley",
                    "City_Municipality": "ANITAPAN NATIONAL HIGH SCHOOL, BRGY ANITAPAN ",
                    "No": 9,
                    "region": "11",
                    "proper_name": "ANITAPAN NATIONAL HIGH SCHOOL, BRGY ANITAPAN ",
                    "device_id": 2110
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.055946, 7.250011]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Cotabato",
                    "City_Municipality": "ANTIPAS",
                    "No": 10,
                    "region": "12",
                    "proper_name": "ANTIPAS",
                    "device_id": 1110
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.827938, 7.434327]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao del Norte",
                    "City_Municipality": "APOKON BRIDGE",
                    "No": 11,
                    "region": "11",
                    "proper_name": "APOKON BRIDGE",
                    "device_id": 1453
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.128624, 7.352584]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Cotabato",
                    "City_Municipality": "ARAKAN",
                    "No": 12,
                    "region": "12",
                    "proper_name": "ARAKAN",
                    "device_id": 1109
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.882608, 8.538966]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Bukidnon",
                    "City_Municipality": "ARCH BRIDGE",
                    "No": 13,
                    "region": "10",
                    "proper_name": "ARCH BRIDGE",
                    "device_id": 760
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.50545, 8.199166]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga del Sur",
                    "City_Municipality": "ARGAO",
                    "No": 14,
                    "region": "9",
                    "proper_name": "ARGAO",
                    "device_id": 1322
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.0028, 8.1706]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Agusan del Sur",
                    "City_Municipality": "ASSCAT, SAN TEODORO",
                    "No": 15,
                    "region": "13",
                    "proper_name": "ASSCAT, SAN TEODORO",
                    "device_id": 570
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.16872, 9.07375]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Surigao del Sur",
                    "City_Municipality": "AWASIAN",
                    "No": 16,
                    "region": "13",
                    "proper_name": "AWASIAN",
                    "device_id": 782
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.063778, 7.75]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Compostela Valley",
                    "City_Municipality": "BABAG BRIDGE",
                    "No": 17,
                    "region": "11",
                    "proper_name": "BABAG BRIDGE",
                    "device_id": 1198
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.710289, 9.124782]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Camiguin",
                    "City_Municipality": "BACNIT ES",
                    "No": 18,
                    "region": "10",
                    "proper_name": "BACNIT ES",
                    "device_id": 1065
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.561331, 7.575417]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao Oriental",
                    "City_Municipality": "BAGANGA",
                    "No": 19,
                    "region": "11",
                    "proper_name": "BAGANGA",
                    "device_id": 795
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.41172, 8.48384]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Misamis Oriental",
                    "City_Municipality": "BAGRASS",
                    "No": 21,
                    "region": "10",
                    "proper_name": "BAGRASS",
                    "device_id": 1672
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.403362, 7.172122]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao City",
                    "City_Municipality": "BAGUIO DISTRICT",
                    "No": 22,
                    "region": "11",
                    "proper_name": "BAGUIO DISTRICT",
                    "device_id": 797
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.563458, 6.533052]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Sultan Kudarat",
                    "City_Municipality": "BAGUMBAYAN",
                    "No": 23,
                    "region": "12",
                    "proper_name": "BAGUMBAYAN",
                    "device_id": 1214
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.2135608, 7.508433]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Lanao del Sur",
                    "City_Municipality": "BALABAGAN MUNICIPAL HALL, BALABAGAN, LANAO DEL SUR",
                    "No": 24,
                    "region": "ARMM",
                    "proper_name": "BALABAGAN MUNICIPAL HALL, BALABAGAN, LANAO DEL SUR",
                    "device_id": 158
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.28368, 8.96935]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Surigao del Sur",
                    "City_Municipality": "BALITE",
                    "No": 25,
                    "region": "13",
                    "proper_name": "BALITE",
                    "device_id": 781
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.015917, 6.9957]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga City",
                    "City_Municipality": "BALUNO - LIMA ELEMENTARY SCHOOL",
                    "No": 26,
                    "region": "9",
                    "proper_name": "BALUNO - LIMA ELEMENTARY SCHOOL",
                    "device_id": 1229
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.77589573, 6.42410871]
                },
                "type": "Feature",
                "properties": {
                    "Province": "South Cotabato",
                    "City_Municipality": "BANGA",
                    "No": 27,
                    "region": "12",
                    "proper_name": "BANGA",
                    "device_id": 1592
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.134194, 7.578735]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Compostela Valley",
                    "City_Municipality": "BANGOY BRIDGE",
                    "No": 28,
                    "region": "11",
                    "proper_name": "BANGOY BRIDGE",
                    "device_id": 957
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.694722, 7.505556]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Cotabato",
                    "City_Municipality": "BANISILAN",
                    "No": 29,
                    "region": "12",
                    "proper_name": "BANISILAN",
                    "device_id": 1119
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.202032, 6.784713]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao del Sur",
                    "City_Municipality": "BANSALAN PROVINCIAL NURSERY",
                    "No": 30,
                    "region": "11",
                    "proper_name": "BANSALAN PROVINCIAL NURSERY",
                    "device_id": 128
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.505996, 7.009073]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao City",
                    "City_Municipality": "BARACAYO ELEMENTARY SCHOOL, DALIAON PLANTATION",
                    "No": 31,
                    "region": "11",
                    "proper_name": "BARACAYO ELEMENTARY SCHOOL, DALIAON PLANTATION",
                    "device_id": 2047
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.486, 8.0976]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga del Sur",
                    "City_Municipality": "BARANGAY PARASAN",
                    "No": 32,
                    "region": "9",
                    "proper_name": "BARANGAY PARASAN",
                    "device_id": 205
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.1017, 7.135667]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga City",
                    "City_Municipality": "BARREDO PMS",
                    "No": 33,
                    "region": "9",
                    "proper_name": "BARREDO PMS",
                    "device_id": 1371
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.596733, 10.065417]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Dinagat Islands",
                    "City_Municipality": "BASILISA POBLACION",
                    "No": 34,
                    "region": "13",
                    "proper_name": "BASILISA POBLACION",
                    "device_id": 1563
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.699028, 8.304539]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Bukidnon",
                    "City_Municipality": "BAUNGON POBLACION",
                    "No": 35,
                    "region": "10",
                    "proper_name": "BAUNGON POBLACION",
                    "device_id": 280
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.7514, 8.713]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Agusan del Sur",
                    "City_Municipality": "BAYUGAN CITY HALL",
                    "No": 36,
                    "region": "13",
                    "proper_name": "BAYUGAN CITY HALL",
                    "device_id": 564
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.00571, 8.30269]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Agusan del Sur",
                    "City_Municipality": "BAYUGAN III NATIONAL HIGH SCHOOL",
                    "No": 37,
                    "region": "13",
                    "proper_name": "BAYUGAN III NATIONAL HIGH SCHOOL",
                    "device_id": 592
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.689365, 7.448416]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao del Norte",
                    "City_Municipality": "BE DUJALI",
                    "No": 38,
                    "region": "11",
                    "proper_name": "BE DUJALI",
                    "device_id": 725
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.97808, 8.33425]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Bukidnon",
                    "City_Municipality": "BFAR KISOLON",
                    "No": 39,
                    "region": "10",
                    "proper_name": "BFAR KISOLON",
                    "device_id": 496
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.39856, 7.92088]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga del Sur",
                    "City_Municipality": "BINAYAN ES",
                    "No": 40,
                    "region": "9",
                    "proper_name": "BINAYAN ES",
                    "device_id": 1744
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.51099, 8.32824]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga del Norte",
                    "City_Municipality": "BOBORINGAN ES",
                    "No": 41,
                    "region": "9",
                    "proper_name": "BOBORINGAN ES",
                    "device_id": 1743
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.495417, 9.738635]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Surigao del Norte",
                    "City_Municipality": "BONIFACIO ELEMENTARY SCHOOL",
                    "No": 42,
                    "region": "13",
                    "proper_name": "BONIFACIO ELEMENTARY SCHOOL",
                    "device_id": 1567
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.375944, 7.869846]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao Oriental",
                    "City_Municipality": "BOSTON",
                    "No": 43,
                    "region": "11",
                    "proper_name": "BOSTON",
                    "device_id": 728
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.842778, 6.173889]
                },
                "type": "Feature",
                "properties": {
                    "Province": "South Cotabato",
                    "City_Municipality": "BRGY. AFUS",
                    "No": 44,
                    "region": "12",
                    "proper_name": "BRGY. AFUS",
                    "device_id": 2096
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.158521, 7.51321]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Compostela Valley",
                    "City_Municipality": "BRGY. ANDAP",
                    "No": 45,
                    "region": "11",
                    "proper_name": "BRGY. ANDAP",
                    "device_id": 958
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.171995, 7.261005]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Compostela Valley",
                    "City_Municipality": "BRGY. ARAIBO",
                    "No": 46,
                    "region": "11",
                    "proper_name": "BRGY. ARAIBO",
                    "device_id": 1461
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [121.904518, 6.662183]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Basilan",
                    "City_Municipality": "BRGY. ATONG-ATONG, LANTAWAN, BASILAN",
                    "No": 47,
                    "region": "ARMM",
                    "proper_name": "BRGY. ATONG-ATONG, LANTAWAN, BASILAN",
                    "device_id": 156
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.5062, 7.8863]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga Sibugay",
                    "City_Municipality": "BRGY. AZUSANO",
                    "No": 48,
                    "region": "9",
                    "proper_name": "BRGY. AZUSANO",
                    "device_id": 1638
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.14394, 6.61123]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Basilan",
                    "City_Municipality": "BRGY. BALOBO, LAMITAN CITY",
                    "No": 49,
                    "region": "ARMM",
                    "proper_name": "BRGY. BALOBO, LAMITAN CITY",
                    "device_id": 1699
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.342317, 7.84075]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Lanao del Sur",
                    "City_Municipality": "BRGY.  BANSAYAN, POONA BAYABAO, LANAO DEL SUR",
                    "No": 50,
                    "region": "ARMM",
                    "proper_name": "BRGY.  BANSAYAN, POONA BAYABAO, LANAO DEL SUR",
                    "device_id": 985
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.09657, 6.63754]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Basilan",
                    "City_Municipality": "BRGY. BOHE YAWAS, LAMITAN CITY",
                    "No": 51,
                    "region": "ARMM",
                    "proper_name": "BRGY. BOHE YAWAS, LAMITAN CITY",
                    "device_id": 1698
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.360598, 7.838637]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao Oriental",
                    "City_Municipality": "BRGY. CABASAGAN",
                    "No": 52,
                    "region": "11",
                    "proper_name": "BRGY. CABASAGAN",
                    "device_id": 1450
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [6.646317, 6.646317]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Isabela City",
                    "City_Municipality": "BRGY. CALVARIO",
                    "No": 53,
                    "region": "9",
                    "proper_name": "BRGY. CALVARIO",
                    "device_id": 1877
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.2002, 8.4485]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga del Norte",
                    "City_Municipality": "BRGY. CAPASE",
                    "No": 54,
                    "region": "9",
                    "proper_name": "BRGY. CAPASE",
                    "device_id": 1656
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.786483, 7.8986]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Lanao del Norte",
                    "City_Municipality": "BRGY. CURVADA",
                    "No": 55,
                    "region": "10",
                    "proper_name": "BRGY. CURVADA",
                    "device_id": 2163
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.008678, 8.001642]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga del Sur",
                    "City_Municipality": "BRGY. DALAON",
                    "No": 56,
                    "region": "9",
                    "proper_name": "BRGY. DALAON",
                    "device_id": 1323
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.2786, 7.9068]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga del Sur",
                    "City_Municipality": "BRGY. DAMPALAN",
                    "No": 57,
                    "region": "9",
                    "proper_name": "BRGY. DAMPALAN",
                    "device_id": 1645
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.32335, 8.246286]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Lanao del Norte",
                    "City_Municipality": "BRGY DIGKILAAN",
                    "No": 58,
                    "region": "10",
                    "proper_name": "BRGY DIGKILAAN",
                    "device_id": 130
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.411, 7.0324]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao City",
                    "City_Municipality": "Brgy. Eden, Toril District, Davao City",
                    "No": 59,
                    "region": "11",
                    "proper_name": "Brgy. Eden, Toril District, Davao City",
                    "device_id": 2170
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.71805, 8.15677]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Misamis Occidental",
                    "City_Municipality": "BRGY. GALA",
                    "No": 60,
                    "region": "10",
                    "proper_name": "BRGY. GALA",
                    "device_id": 1683
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.5995, 7.805]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga Sibugay",
                    "City_Municipality": "BRGY. GITUAN",
                    "No": 61,
                    "region": "9",
                    "proper_name": "BRGY. GITUAN",
                    "device_id": 1639
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.28912, 6.15394]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Sarangani",
                    "City_Municipality": "BRGY. HALL ALEGRIA",
                    "No": 62,
                    "region": "12",
                    "proper_name": "BRGY. HALL ALEGRIA",
                    "device_id": 2024
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.883077, 9.2774]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Surigao del Sur",
                    "City_Municipality": "Brgy. Hall, Cabangahan",
                    "No": 63,
                    "region": "13",
                    "proper_name": "Brgy. Hall, Cabangahan",
                    "device_id": 2221
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.29477, 6.03808]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Sarangani",
                    "City_Municipality": "BRGY. HALL LUN PADID",
                    "No": 64,
                    "region": "12",
                    "proper_name": "BRGY. HALL LUN PADID",
                    "device_id": 2027
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.95816, 6.24811]
                },
                "type": "Feature",
                "properties": {
                    "Province": "South Cotabato",
                    "City_Municipality": "BRGY. HALL SIMBO",
                    "No": 65,
                    "region": "12",
                    "proper_name": "BRGY. HALL SIMBO",
                    "device_id": 2028
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.34303, 8.924192]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Agusan del Norte",
                    "City_Municipality": "BRGY. HAMIGUITAN",
                    "No": 66,
                    "region": "13",
                    "proper_name": "BRGY. HAMIGUITAN",
                    "device_id": 1565
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.113144, 6.829236]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao Oriental",
                    "City_Municipality": "BRGY. IBA",
                    "No": 67,
                    "region": "11",
                    "proper_name": "BRGY. IBA",
                    "device_id": 1458
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.67923, 7.91788]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Lanao del Norte",
                    "City_Municipality": "BRGY. KAHAYAGAN",
                    "No": 68,
                    "region": "10",
                    "proper_name": "BRGY. KAHAYAGAN",
                    "device_id": 1674
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [121.998517, 6.61435]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Isabela City",
                    "City_Municipality": "BRGY. KAPATAGAN",
                    "No": 69,
                    "region": "9",
                    "proper_name": "BRGY. KAPATAGAN",
                    "device_id": 1878
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [121.952217, 6.6094]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Isabela City",
                    "City_Municipality": "BRGY. KAPAYAWAN",
                    "No": 70,
                    "region": "9",
                    "proper_name": "BRGY. KAPAYAWAN",
                    "device_id": 1880
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.557903, 7.085774]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao City",
                    "City_Municipality": "BRGY. MATINA PANGI",
                    "No": 72,
                    "region": "11",
                    "proper_name": "BRGY. MATINA PANGI",
                    "device_id": 954
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.0724, 7.6276]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Lanao del Sur",
                    "City_Municipality": "BRGY. MATLING, MALABANG, LANAO DEL SUR",
                    "No": 73,
                    "region": "ARMM",
                    "proper_name": "BRGY. MATLING, MALABANG, LANAO DEL SUR",
                    "device_id": 851
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.100521, 7.572987]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Compostela Valley",
                    "City_Municipality": "BRGY. PANAG",
                    "No": 74,
                    "region": "11",
                    "proper_name": "BRGY. PANAG",
                    "device_id": 955
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.9545, 7.516]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga Sibugay",
                    "City_Municipality": "BRGY. PAYUNGAN",
                    "No": 75,
                    "region": "9",
                    "proper_name": "BRGY. PAYUNGAN",
                    "device_id": 1640
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.486414, 7.633998]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao del Norte",
                    "City_Municipality": "BRGY. STO NINO",
                    "No": 76,
                    "region": "11",
                    "proper_name": "BRGY. STO NINO",
                    "device_id": 1456
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.41695, 8.43365]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Misamis Oriental",
                    "City_Municipality": "BRGY. TULA",
                    "No": 77,
                    "region": "10",
                    "proper_name": "BRGY. TULA",
                    "device_id": 1671
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.57335, 8.06255]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga del Norte",
                    "City_Municipality": "BRGY. UBAY",
                    "No": 78,
                    "region": "9",
                    "proper_name": "BRGY. UBAY",
                    "device_id": 1680
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.4786858, 6.09735739]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Sarangani",
                    "City_Municipality": "BRGY. UPO",
                    "No": 79,
                    "region": "12",
                    "proper_name": "BRGY. UPO",
                    "device_id": 2032
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.378717, 7.949433]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Lanao del Sur",
                    "City_Municipality": "BUADIPUSO-BUNTONG TOWN HALL, LANAO DEL SUR",
                    "No": 80,
                    "region": "ARMM",
                    "proper_name": "BUADIPUSO-BUNTONG TOWN HALL, LANAO DEL SUR",
                    "device_id": 983
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.5184, 8.383867]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga del Norte",
                    "City_Municipality": "BUENASUERTE",
                    "No": 81,
                    "region": "9",
                    "proper_name": "BUENASUERTE",
                    "device_id": 1653
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.40895, 8.97455]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Agusan del Sur",
                    "City_Municipality": "BUENAVISTA MUNICIPAL HALL",
                    "No": 82,
                    "region": "13",
                    "proper_name": "BUENAVISTA MUNICIPAL HALL",
                    "device_id": 1564
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.5308, 8.285]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga del Norte",
                    "City_Municipality": "BUENAVISTA",
                    "No": 83,
                    "region": "9",
                    "proper_name": "BUENAVISTA",
                    "device_id": 1654
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.79601, 6.71265]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Maguindanao",
                    "City_Municipality": "BULUAN MUNICIPAL HALL, BULUAN, MAGUINDANAO",
                    "No": 84,
                    "region": "ARMM",
                    "proper_name": "BULUAN MUNICIPAL HALL, BULUAN, MAGUINDANAO",
                    "device_id": 643
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.137245, 7.132498]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga City",
                    "City_Municipality": "BUNGUIA",
                    "No": 85,
                    "region": "9",
                    "proper_name": "BUNGUIA",
                    "device_id": 1242
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.074074, 10.019006]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Surigao del Norte",
                    "City_Municipality": "BURGOS MUNICIPAL HALL",
                    "No": 86,
                    "region": "13",
                    "proper_name": "BURGOS MUNICIPAL HALL",
                    "device_id": 1627
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.516667, 8.933333]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Agusan del Norte",
                    "City_Municipality": "BUTUAN",
                    "No": 871,
                    "region": "13",
                    "proper_name": "BUTUAN PAGASA COMPOUND",
                    "device_id": 118
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.546357, 9.121524]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Agusan del Norte",
                    "City_Municipality": "CABADBARAN",
                    "No": 87,
                    "region": "13",
                    "proper_name": "CABADBARAN",
                    "device_id": 711
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.119683, 7.107967]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga City",
                    "City_Municipality": "CABONEGRO REPEATER STATION",
                    "No": 88,
                    "region": "9",
                    "proper_name": "CABONEGRO REPEATER STATION",
                    "device_id": 1240
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.672013, 9.923205]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Dinagat Islands",
                    "City_Municipality": "CAGDIANAO",
                    "No": 89,
                    "region": "13",
                    "proper_name": "CAGDIANAO",
                    "device_id": 1625
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.452416, 7.185895]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao City",
                    "City_Municipality": "CALINAN",
                    "No": 90,
                    "region": "11",
                    "proper_name": "CALINAN",
                    "device_id": 1196
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [120.99895, 6.02578]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Sulu",
                    "City_Municipality": "CAMP BUD DATU, BRGY. TAGBAK, INADANAN, SULU",
                    "No": 91,
                    "region": "ARMM",
                    "proper_name": "CAMP BUD DATU, BRGY. TAGBAK, INADANAN, SULU",
                    "device_id": 2060
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.26631, 7.74097]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga del Norte",
                    "City_Municipality": "CANATUAN ES",
                    "No": 92,
                    "region": "9",
                    "proper_name": "CANATUAN ES",
                    "device_id": 1843
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.565397, 7.328405]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao Oriental",
                    "City_Municipality": "CARAGA",
                    "No": 93,
                    "region": "11",
                    "proper_name": "CARAGA",
                    "device_id": 729
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.59641, 8.95917]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Agusan del Norte",
                    "City_Municipality": "CARAGA STATE UNIVERSITY, AMPAYON",
                    "No": 94,
                    "region": "13",
                    "proper_name": "CARAGA STATE UNIVERSITY, AMPAYON",
                    "device_id": 779
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.348615, 7.920779]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga del Sur",
                    "City_Municipality": "CARIDAD",
                    "No": 95,
                    "region": "9",
                    "proper_name": "CARIDAD",
                    "device_id": 110
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.010491, 9.13778]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Surigao del Norte",
                    "City_Municipality": "CARMEN",
                    "No": 96,
                    "region": "13",
                    "proper_name": "CARMEN",
                    "device_id": 1577
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.720972, 5.937694]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Cotabato",
                    "City_Municipality": "CARMEN",
                    "No": 97,
                    "region": "12",
                    "proper_name": "CARMEN",
                    "device_id": 135
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.017343, 9.229546]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Surigao del Norte",
                    "City_Municipality": "Carmen Municipal Hall",
                    "No": 98,
                    "region": "13",
                    "proper_name": "Carmen Municipal Hall",
                    "device_id": 1561
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.2957, 8.990048]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Agusan del Norte",
                    "City_Municipality": "CARMEN MUNICIPAL HALL",
                    "No": 99,
                    "region": "13",
                    "proper_name": "CARMEN MUNICIPAL HALL",
                    "device_id": 1566
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.448292, 7.79103]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao Oriental",
                    "City_Municipality": "CATEEL",
                    "No": 100,
                    "region": "11",
                    "proper_name": "CATEEL",
                    "device_id": 730
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.6405139, 8.4715139]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Misamis Oriental",
                    "City_Municipality": "CDO BRIDGE, CARMEN",
                    "No": 101,
                    "region": "10",
                    "proper_name": "CDO BRIDGE, CARMEN",
                    "device_id": 311
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.711959, 7.078196]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao del Norte",
                    "City_Municipality": "CDRRMC OFFICE",
                    "No": 102,
                    "region": "11",
                    "proper_name": "CDRRMC OFFICE",
                    "device_id": 1459
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.10447, 8.820457]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Misamis Oriental",
                    "City_Municipality": "CITY ENGINEERS COMPOUND",
                    "No": 103,
                    "region": "10",
                    "proper_name": "CITY ENGINEERS COMPOUND",
                    "device_id": 126
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.721148, 9.568606]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Surigao del Norte",
                    "City_Municipality": "CLAVER MUNICIPAL HALL COMPOUND",
                    "No": 104,
                    "region": "13",
                    "proper_name": "CLAVER MUNICIPAL HALL COMPOUND",
                    "device_id": 154
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.24953, 6.53412]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao del Sur",
                    "City_Municipality": "COGON BACACA ELEMENTARY SCHOOL",
                    "No": 105,
                    "region": "11",
                    "proper_name": "COGON BACACA ELEMENTARY SCHOOL",
                    "device_id": 1962
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.743559, 8.251455]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Misamis Occidental",
                    "City_Municipality": "COLAMBUTAN BAJO",
                    "No": 106,
                    "region": "10",
                    "proper_name": "COLAMBUTAN BAJO",
                    "device_id": 1664
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.961296, 6.68485]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Sultan Kudarat",
                    "City_Municipality": "COLUMBIO",
                    "No": 107,
                    "region": "12",
                    "proper_name": "COLUMBIO",
                    "device_id": 1423
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.10832, 7.70599]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Compostela Valley",
                    "City_Municipality": "COMPOSTELA - MANGAYON NHS",
                    "No": 108,
                    "region": "11",
                    "proper_name": "COMPOSTELA - MANGAYON NHS",
                    "device_id": 960
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.1386, 6.8552]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga City",
                    "City_Municipality": "CULIANAN BRIDGE",
                    "No": 109,
                    "region": "9",
                    "proper_name": "CULIANAN BRIDGE",
                    "device_id": 1634
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [121.214722, 7.201667]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga City",
                    "City_Municipality": "CURUAN BRIDGE",
                    "No": 110,
                    "region": "9",
                    "proper_name": "CURUAN BRIDGE",
                    "device_id": 743
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.7875, 9.157778]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Camiguin",
                    "City_Municipality": "DA ANIMAL BREEDING STATION",
                    "No": 111,
                    "region": "10",
                    "proper_name": "DA ANIMAL BREEDING STATION",
                    "device_id": 124
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.947553, 8.617048]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Misamis Oriental",
                    "City_Municipality": "DA-CES LANISE",
                    "No": 112,
                    "region": "10",
                    "proper_name": "DA-CES LANISE",
                    "device_id": 1087
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.85072, 8.21982]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Bukidnon",
                    "City_Municipality": "DAHILAYAN",
                    "No": 113,
                    "region": "10",
                    "proper_name": "DAHILAYAN",
                    "device_id": 498
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.51763, 9.6371]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Surigao del Norte",
                    "City_Municipality": "Dakung Patag National High School, Dakung Patag",
                    "No": 114,
                    "region": "13",
                    "proper_name": "Dakung Patag National High School, Dakung Patag",
                    "device_id": 2222
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.60837, 7.33778]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao City",
                    "City_Municipality": "Damilag Elementary School",
                    "No": 115,
                    "region": "11",
                    "proper_name": "Damilag Elementary School",
                    "device_id": 2175
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.00678, 7.81807]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga del Sur",
                    "City_Municipality": "DAMIT ELEMENTARY SCHOOL",
                    "No": 116,
                    "region": "9",
                    "proper_name": "DAMIT ELEMENTARY SCHOOL",
                    "device_id": 1735
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.07259, 8.26231]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga del Norte",
                    "City_Municipality": "DENUYAN",
                    "No": 117,
                    "region": "9",
                    "proper_name": "DENUYAN",
                    "device_id": 1837
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.79475, 8.33728]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Agusan del Sur",
                    "City_Municipality": "DESAMPARADOS",
                    "No": 118,
                    "region": "13",
                    "proper_name": "DESAMPARADOS",
                    "device_id": 587
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.97958, 6.14415]
                },
                "type": "Feature",
                "properties": {
                    "Province": "South Cotabato",
                    "City_Municipality": "DIATA ELEMENTARY SCHOOL, BRGY. BASAG ",
                    "No": 119,
                    "region": "12",
                    "proper_name": "DIATA ELEMENTARY SCHOOL, BRGY. BASAG ",
                    "device_id": 1597
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.4563, 6.8352053]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Maguindanao",
                    "City_Municipality": "DICALUNGAN BRIDGE, AMPATUAN, MAGUINDANAO",
                    "No": 120,
                    "region": "ARMM",
                    "proper_name": "DICALUNGAN BRIDGE, AMPATUAN, MAGUINDANAO",
                    "device_id": 769
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.604433, 9.954167]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Dinagat Islands",
                    "City_Municipality": "DINAGAT",
                    "No": 121,
                    "region": "13",
                    "proper_name": "DINAGAT",
                    "device_id": 1562
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.98275, 7.694067]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga Sibugay",
                    "City_Municipality": "DIPLAHAN",
                    "No": 122,
                    "region": "9",
                    "proper_name": "DIPLAHAN",
                    "device_id": 1162
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.7394, 8.6283]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Agusan del Sur",
                    "City_Municipality": "DON FLAVIA",
                    "No": 123,
                    "region": "13",
                    "proper_name": "DON FLAVIA",
                    "device_id": 607
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.6947, 6.197813]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao del Sur",
                    "City_Municipality": "DON MARCELINO MUNICIPAL HALL",
                    "No": 124,
                    "region": "11",
                    "proper_name": "DON MARCELINO MUNICIPAL HALL",
                    "device_id": 1191
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.905236, 8.06762]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Agusan del Sur",
                    "City_Municipality": "DON MATEO",
                    "No": 125,
                    "region": "13",
                    "proper_name": "DON MATEO",
                    "device_id": 608
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.692343, 9.014568]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Agusan del Norte",
                    "City_Municipality": "DUGYAMAN, ANTICALA",
                    "No": 126,
                    "region": "13",
                    "proper_name": "DUGYAMAN, ANTICALA",
                    "device_id": 707
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.1784, 7.151767]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga City",
                    "City_Municipality": "DULIAN",
                    "No": 127,
                    "region": "9",
                    "proper_name": "DULIAN",
                    "device_id": 1241
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.51620279, 6.71862353]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Sultan Kudarat",
                    "City_Municipality": "ESPERANZA",
                    "No": 128,
                    "region": "12",
                    "proper_name": "ESPERANZA",
                    "device_id": 1600
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.657983, 8.67789]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Agusan del Sur",
                    "City_Municipality": "ESPERANZA POBLACION",
                    "No": 129,
                    "region": "13",
                    "proper_name": "ESPERANZA POBLACION",
                    "device_id": 609
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.05973, 9.23172]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Surigao del Sur",
                    "City_Municipality": "Florita Herrera-Irizari Nat\u2019l High School",
                    "No": 130,
                    "region": "13",
                    "proper_name": "Florita Herrera-Irizari Nat\u2019l High School",
                    "device_id": 1576
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.69779, 9.59577]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Surigao del Norte",
                    "City_Municipality": "GIGAQUIT",
                    "No": 131,
                    "region": "13",
                    "proper_name": "GIGAQUIT",
                    "device_id": 1204
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.2046, 5.82165]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Sarangani",
                    "City_Municipality": "GLAN",
                    "No": 132,
                    "region": "12",
                    "proper_name": "GLAN",
                    "device_id": 1589
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.843733, 8.0007]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga del Norte",
                    "City_Municipality": "GODOD",
                    "No": 133,
                    "region": "9",
                    "proper_name": "GODOD",
                    "device_id": 1649
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.4663, 9.798]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga Sibugay",
                    "City_Municipality": "GOOD-YEAR BANKER BRIDGE",
                    "No": 134,
                    "region": "9",
                    "proper_name": "GOOD-YEAR BANKER BRIDGE",
                    "device_id": 2055
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.072317, 6.653412]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao Oriental",
                    "City_Municipality": "GOVERNOR GENEROSO",
                    "No": 135,
                    "region": "11",
                    "proper_name": "GOVERNOR GENEROSO",
                    "device_id": 731
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.822944, 8.864889]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Misamis Oriental",
                    "City_Municipality": "GUINALABAN",
                    "No": 136,
                    "region": "10",
                    "proper_name": "GUINALABAN",
                    "device_id": 1076
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.5469, 8.21467]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga del Sur",
                    "City_Municipality": "GUMAHAN",
                    "No": 137,
                    "region": "9",
                    "proper_name": "GUMAHAN",
                    "device_id": 1643
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.45026, 8.42565]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga del Norte",
                    "City_Municipality": "GUMAY ES, UPPER GUMAY",
                    "No": 138,
                    "region": "9",
                    "proper_name": "GUMAY ES, UPPER GUMAY",
                    "device_id": 1742
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.137778, 6.658056]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Basilan",
                    "City_Municipality": "H2K BUILDING, QUEZON BOULEVARD, LAMITAN CITY",
                    "No": 139,
                    "region": "ARMM",
                    "proper_name": "H2K BUILDING, QUEZON BOULEVARD, LAMITAN CITY",
                    "device_id": 768
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.297676, 6.688573]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao del Sur",
                    "City_Municipality": "HAGONOY MUNICIPAL HALL",
                    "No": 140,
                    "region": "11",
                    "proper_name": "HAGONOY MUNICIPAL HALL",
                    "device_id": 857
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.99824, 8.29574]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Bukidnon",
                    "City_Municipality": "HEALTH CENTER, POBLACION",
                    "No": 141,
                    "region": "10",
                    "proper_name": "HEALTH CENTER, POBLACION",
                    "device_id": 488
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.931317, 7.643833]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga Sibugay",
                    "City_Municipality": "IMELDA",
                    "No": 142,
                    "region": "9",
                    "proper_name": "IMELDA",
                    "device_id": 1169
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.39714, 7.92217]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga del Norte",
                    "City_Municipality": "IMMACULADA CONCEPCION ELEMENTARY SCHOOL",
                    "No": 143,
                    "region": "9",
                    "proper_name": "IMMACULADA CONCEPCION ELEMENTARY SCHOOL",
                    "device_id": 1840
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.028042, 8.252152]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Bukidnon",
                    "City_Municipality": "IMPALUTAO",
                    "No": 144,
                    "region": "10",
                    "proper_name": "IMPALUTAO",
                    "device_id": 576
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.55945, 9.24156]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Agusan del Norte",
                    "City_Municipality": "JAGUPIT",
                    "No": 145,
                    "region": "13",
                    "proper_name": "JAGUPIT",
                    "device_id": 713
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.05059809, 6.55588464]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Sultan Kudarat",
                    "City_Municipality": "KALAMANSIG",
                    "No": 147,
                    "region": "12",
                    "proper_name": "KALAMANSIG",
                    "device_id": 1607
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.050434, 7.83]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Compostela Valley",
                    "City_Municipality": "KALAW BRIDGE",
                    "No": 148,
                    "region": "11",
                    "proper_name": "KALAW BRIDGE",
                    "device_id": 1199
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.69877, 7.59273]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao del Norte",
                    "City_Municipality": "KAPALONG",
                    "No": 149,
                    "region": "11",
                    "proper_name": "KAPALONG",
                    "device_id": 1152
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.283333, 8.433333]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga del Norte",
                    "City_Municipality": "KATIPUNAN",
                    "No": 150,
                    "region": "9",
                    "proper_name": "KATIPUNAN",
                    "device_id": 111
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.48217, 7.33151]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao Oriental",
                    "City_Municipality": "KAWAIG BRIDGE, PM SOBRECAREY",
                    "No": 151,
                    "region": "11",
                    "proper_name": "KAWAIG BRIDGE, PM SOBRECAREY",
                    "device_id": 1913
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.719639, 5.938583]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Sarangani",
                    "City_Municipality": "KIAMBA",
                    "No": 152,
                    "region": "12",
                    "proper_name": "KIAMBA",
                    "device_id": 133
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.203295, 9.005353]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Misamis Oriental",
                    "City_Municipality": "KIBUNGSOD BRIDGE",
                    "No": 153,
                    "region": "10",
                    "proper_name": "KIBUNGSOD BRIDGE",
                    "device_id": 965
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.091103, 7.008533]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Cotabato",
                    "City_Municipality": "KIDAPAWAN CITY HALL",
                    "No": 154,
                    "region": "12",
                    "proper_name": "KIDAPAWAN CITY HALL",
                    "device_id": 1121
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.1475, 6.78622]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao del Sur",
                    "City_Municipality": "KILOLOG BRIDGE",
                    "No": 155,
                    "region": "11",
                    "proper_name": "KILOLOG BRIDGE",
                    "device_id": 1961
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.692594, 8.357081]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Bukidnon",
                    "City_Municipality": "KINAWE",
                    "No": 156,
                    "region": "10",
                    "proper_name": "KINAWE",
                    "device_id": 279
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.2428342, 5.81275465]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Sarangani",
                    "City_Municipality": "KIOGAM ELEM. SCHOOL",
                    "No": 157,
                    "region": "12",
                    "proper_name": "KIOGAM ELEM. SCHOOL",
                    "device_id": 2030
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.569889, 9.437884]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Agusan del Norte",
                    "City_Municipality": "KITCHARAO MUNICIPAL HALL COMPOUND",
                    "No": 158,
                    "region": "13",
                    "proper_name": "KITCHARAO MUNICIPAL HALL COMPOUND",
                    "device_id": 155
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.862778, 6.476667]
                },
                "type": "Feature",
                "properties": {
                    "Province": "South Cotabato",
                    "City_Municipality": "KORONADAL CITY",
                    "No": 159,
                    "region": "12",
                    "proper_name": "KORONADAL CITY",
                    "device_id": 134
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [121.11985, 5.99813]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Sulu",
                    "City_Municipality": "KUHAW BARANGAY HALL, TALIPAO, SULU",
                    "No": 160,
                    "region": "ARMM",
                    "proper_name": "KUHAW BARANGAY HALL, TALIPAO, SULU",
                    "device_id": 2064
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.168917, 7.745333]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga del Sur",
                    "City_Municipality": "KUMALARANG RIVER",
                    "No": 161,
                    "region": "9",
                    "proper_name": "KUMALARANG RIVER",
                    "device_id": 613
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.894829, 7.810735]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Bukidnon",
                    "City_Municipality": "KUYA",
                    "No": 162,
                    "region": "10",
                    "proper_name": "KUYA",
                    "device_id": 597
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.792719, 7.819065]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Compostela Valley",
                    "City_Municipality": "LAAK MUNICIPAL HALL",
                    "No": 163,
                    "region": "11",
                    "proper_name": "LAAK MUNICIPAL HALL",
                    "device_id": 1289
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.71167564, 6.22401117]
                },
                "type": "Feature",
                "properties": {
                    "Province": "South Cotabato",
                    "City_Municipality": "LAKE SEBU",
                    "No": 164,
                    "region": "12",
                    "proper_name": "LAKE SEBU",
                    "device_id": 1598
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.5244, 8.4725]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga del Norte",
                    "City_Municipality": "LA LIBERTAD NATIONAL HIGH SCHOOL",
                    "No": 165,
                    "region": "9",
                    "proper_name": "LA LIBERTAD NATIONAL HIGH SCHOOL",
                    "device_id": 1657
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.6350694, 6.79784999]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Sultan Kudarat",
                    "City_Municipality": "LAMBAYONG",
                    "No": 166,
                    "region": "12",
                    "proper_name": "LAMBAYONG",
                    "device_id": 1608
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.55375, 8.43806]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga del Norte",
                    "City_Municipality": "LA VICTORIA ES",
                    "No": 167,
                    "region": "9",
                    "proper_name": "LA VICTORIA ES",
                    "device_id": 1741
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.75814, 7.5343]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao del Norte",
                    "City_Municipality": "LAWANG BRIDGE, ASUNCION",
                    "No": 168,
                    "region": "11",
                    "proper_name": "LAWANG BRIDGE, ASUNCION",
                    "device_id": 961
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.0670194, 6.63521666]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Sultan Kudarat",
                    "City_Municipality": "Lebak",
                    "No": 169,
                    "region": "12",
                    "proper_name": "Lebak",
                    "device_id": 1606
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.533495, 10.195108]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Dinagat Islands",
                    "City_Municipality": "LIBJO",
                    "No": 170,
                    "region": "13",
                    "proper_name": "LIBJO",
                    "device_id": 1626
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.513056, 7.245556]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Cotabato",
                    "City_Municipality": "LIBUNGAN",
                    "No": 171,
                    "region": "12",
                    "proper_name": "LIBUNGAN",
                    "device_id": 1120
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.9692639, 7.4481667]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Compostela Valley",
                    "City_Municipality": "Limbo bridge, Brgy. Limbo",
                    "No": 172,
                    "region": "11",
                    "proper_name": "Limbo bridge, Brgy. Limbo",
                    "device_id": 723
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.57843, 10.359748]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Dinagat Islands",
                    "City_Municipality": "LORETO",
                    "No": 173,
                    "region": "13",
                    "proper_name": "LORETO",
                    "device_id": 1624
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.853157, 8.185955]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Agusan del Sur",
                    "City_Municipality": "LORETO MUNICIPAL HALL",
                    "No": 174,
                    "region": "13",
                    "proper_name": "LORETO MUNICIPAL HALL",
                    "device_id": 591
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.5888, 10.0083]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Dinagat Islands",
                    "City_Municipality": "LUNA",
                    "No": 175,
                    "region": "13",
                    "proper_name": "LUNA",
                    "device_id": 1386
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.108665, 8.763194]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Misamis Oriental",
                    "City_Municipality": "Lurisa National High School, Samay",
                    "No": 176,
                    "region": "10",
                    "proper_name": "Lurisa National High School, Samay",
                    "device_id": 1063
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.85773205, 6.55983244]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Sultan Kudarat",
                    "City_Municipality": "LUTAYAN",
                    "No": 177,
                    "region": "12",
                    "proper_name": "LUTAYAN",
                    "device_id": 1610
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.99654, 5.86094]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Sarangani",
                    "City_Municipality": "MAASIM",
                    "No": 178,
                    "region": "12",
                    "proper_name": "MAASIM",
                    "device_id": 1588
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.96407, 9.26147]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Surigao del Sur",
                    "City_Municipality": "MADRID MUNICIPAL HALL",
                    "No": 180,
                    "region": "13",
                    "proper_name": "MADRID MUNICIPAL HALL",
                    "device_id": 1666
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.126145, 7.104551]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Cotabato",
                    "City_Municipality": "MAGPET",
                    "No": 181,
                    "region": "12",
                    "proper_name": "MAGPET",
                    "device_id": 1107
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.46017, 7.37361]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao Oriental",
                    "City_Municipality": "MAGSAYAP ELEMENTARY SCHOOL, SITIO BATIANO, BRGY. SAN PEDRO",
                    "No": 182,
                    "region": "11",
                    "proper_name": "MAGSAYAP ELEMENTARY SCHOOL, SITIO BATIANO, BRGY. SAN PEDRO",
                    "device_id": 2048
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.00708, 8.63208]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Agusan del Sur",
                    "City_Municipality": "MAGSAYSAY AGUSAN DEL SUR",
                    "No": 183,
                    "region": "13",
                    "proper_name": "MAGSAYSAY AGUSAN DEL SUR",
                    "device_id": 588
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.749679, 7.438699]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao del Norte",
                    "City_Municipality": "MAGUPISING BRIDGE",
                    "No": 184,
                    "region": "11",
                    "proper_name": "MAGUPISING BRIDGE",
                    "device_id": 1460
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [121.025633, 5.933017]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Sulu",
                    "City_Municipality": "MAIMBUNG MUNICIPAL HALL, MAIMBUNG, SULU",
                    "No": 185,
                    "region": "ARMM",
                    "proper_name": "MAIMBUNG MUNICIPAL HALL, MAIMBUNG, SULU",
                    "device_id": 1168
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.523452, 9.540541]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Surigao del Norte",
                    "City_Municipality": "MAINIT MUNICIPAL HALL",
                    "No": 186,
                    "region": "13",
                    "proper_name": "MAINIT MUNICIPAL HALL",
                    "device_id": 709
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.49532, 6.06126]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Sarangani",
                    "City_Municipality": "MAITUM",
                    "No": 187,
                    "region": "12",
                    "proper_name": "MAITUM",
                    "device_id": 1587
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.088982, 6.958764]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Cotabato",
                    "City_Municipality": "MAKILALA MUNICIPAL HALL",
                    "No": 188,
                    "region": "12",
                    "proper_name": "MAKILALA MUNICIPAL HALL",
                    "device_id": 1106
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.28825, 5.97076]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Sarangani",
                    "City_Municipality": "MALAPATAN",
                    "No": 189,
                    "region": "12",
                    "proper_name": "MALAPATAN",
                    "device_id": 1590
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.40162, 9.61856]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Surigao del Norte",
                    "City_Municipality": "MALIMONO",
                    "No": 190,
                    "region": "13",
                    "proper_name": "MALIMONO",
                    "device_id": 1203
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.74004, 7.8597]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Lanao del Norte",
                    "City_Municipality": "MALINAS ELEMENTARY SCHOOL",
                    "No": 191,
                    "region": "10",
                    "proper_name": "MALINAS ELEMENTARY SCHOOL",
                    "device_id": 1675
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.920721, 7.526523]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Compostela Valley",
                    "City_Municipality": "MALINAWON",
                    "No": 192,
                    "region": "11",
                    "proper_name": "MALINAWON",
                    "device_id": 1287
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.855645, 7.987106]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Lanao del Norte",
                    "City_Municipality": "MALINGAO CENTRAL SCHOOL",
                    "No": 193,
                    "region": "10",
                    "proper_name": "MALINGAO CENTRAL SCHOOL",
                    "device_id": 1216
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.271389, 6.3775]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Sarangani",
                    "City_Municipality": "MALUNGON",
                    "No": 194,
                    "region": "12",
                    "proper_name": "MALUNGON",
                    "device_id": 561
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [121.8768869, 6.541503]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Basilan",
                    "City_Municipality": "MALUSO MUNICIPAL HALL, MALUSO, BASILAN",
                    "No": 195,
                    "region": "ARMM",
                    "proper_name": "MALUSO MUNICIPAL HALL, MALUSO, BASILAN",
                    "device_id": 1082
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.003941, 7.707788]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Compostela Valley",
                    "City_Municipality": "Manat Bridge, Poblacion",
                    "No": 196,
                    "region": "11",
                    "proper_name": "Manat Bridge, Poblacion",
                    "device_id": 1284
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.12321, 8.12093]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Agusan del Sur",
                    "City_Municipality": "MANAT ELEM. SCHOOL",
                    "No": 197,
                    "region": "13",
                    "proper_name": "MANAT ELEM. SCHOOL",
                    "device_id": 568
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.539245, 7.210315]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao Oriental",
                    "City_Municipality": "MANAY",
                    "No": 198,
                    "region": "11",
                    "proper_name": "MANAY",
                    "device_id": 732
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.120651, 7.823864]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Compostela Valley",
                    "City_Municipality": "MANGANON",
                    "No": 199,
                    "region": "11",
                    "proper_name": "MANGANON",
                    "device_id": 1449
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.175933, 7.03625]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga City",
                    "City_Municipality": "MANICAHAN SPILLWAY",
                    "No": 200,
                    "region": "9",
                    "proper_name": "MANICAHAN SPILLWAY",
                    "device_id": 842
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.01137, 7.78138]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Bukidnon",
                    "City_Municipality": "MARAMAG MUNICIPAL HALL",
                    "No": 201,
                    "region": "10",
                    "proper_name": "MARAMAG MUNICIPAL HALL",
                    "device_id": 500
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.284667, 8.001167]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Lanao del Sur",
                    "City_Municipality": "MARAWI CITY HALL, MARAWI CITY",
                    "No": 202,
                    "region": "ARMM",
                    "proper_name": "MARAWI CITY HALL, MARAWI CITY",
                    "device_id": 1166
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.371333, 7.864167]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Lanao del Sur",
                    "City_Municipality": "MARIBO MADIAR, LUMBA, BAYABAO",
                    "No": 203,
                    "region": "ARMM",
                    "proper_name": "MARIBO MADIAR, LUMBA, BAYABAO",
                    "device_id": 982
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.901352, 7.08288]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Cotabato",
                    "City_Municipality": "MATALAM",
                    "No": 204,
                    "region": "12",
                    "proper_name": "MATALAM",
                    "device_id": 1111
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.5998, 8.73295]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Agusan del Norte",
                    "City_Municipality": "MAT-I",
                    "No": 205,
                    "region": "13",
                    "proper_name": "MAT-I",
                    "device_id": 611
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.466466, 9.734774]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Surigao del Sur",
                    "City_Municipality": "MAT-I NATIONAL HIGH SCHOOL",
                    "No": 206,
                    "region": "13",
                    "proper_name": "MAT-I NATIONAL HIGH SCHOOL",
                    "device_id": 1573
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.8108, 8.0552]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga del Norte",
                    "City_Municipality": "MAUSWAGON BRIDGE",
                    "No": 207,
                    "region": "9",
                    "proper_name": "MAUSWAGON BRIDGE",
                    "device_id": 1650
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.525, 7.90637]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga del Norte",
                    "City_Municipality": "MDRRMC",
                    "No": 208,
                    "region": "9",
                    "proper_name": "MDRRMC",
                    "device_id": 1841
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.091894, 6.836565]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao Oriental",
                    "City_Municipality": "MDRRM OFFICE",
                    "No": 209,
                    "region": "11",
                    "proper_name": "MDRRM OFFICE",
                    "device_id": 1454
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.010952, 6.898034]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao Oriental",
                    "City_Municipality": "MDRRMO",
                    "No": 210,
                    "region": "11",
                    "proper_name": "MDRRMO",
                    "device_id": 549
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.62144, 7.51597]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao del Norte",
                    "City_Municipality": "MENZI BRIDGE",
                    "No": 211,
                    "region": "11",
                    "proper_name": "MENZI BRIDGE",
                    "device_id": 956
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.531333, 7.190306]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Cotabato",
                    "City_Municipality": "MIDSAYAP",
                    "No": 212,
                    "region": "12",
                    "proper_name": "MIDSAYAP",
                    "device_id": 1116
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.87555, 8.995137]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Misamis Oriental",
                    "City_Municipality": "Mintabon",
                    "No": 213,
                    "region": "10",
                    "proper_name": "Mintabon",
                    "device_id": 1064
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.501694, 7.094917]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao City",
                    "City_Municipality": "MINTAL",
                    "No": 214,
                    "region": "11",
                    "proper_name": "MINTAL",
                    "device_id": 1195
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.904556, 6.906741]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Cotabato",
                    "City_Municipality": "M LANG",
                    "No": 215,
                    "region": "12",
                    "proper_name": "M LANG",
                    "device_id": 1114
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.36423, 7.11779]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Maguindanao",
                    "City_Municipality": "MOTHER KABUNTALAN MUNICIPAL HALL, MAGUINDANAO",
                    "No": 216,
                    "region": "ARMM",
                    "proper_name": "MOTHER KABUNTALAN MUNICIPAL HALL, MAGUINDANAO",
                    "device_id": 2035
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.151185, 7.003037]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Maguindanao",
                    "City_Municipality": "MOTORPOOL, NORTH UPI, MAGUINDANAO",
                    "No": 217,
                    "region": "ARMM",
                    "proper_name": "MOTORPOOL, NORTH UPI, MAGUINDANAO",
                    "device_id": 159
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.319433, 7.008533]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Maguindanao",
                    "City_Municipality": "MSMAGUINDANAO, DATODIN SINSUAT, MAGUINDANAO",
                    "No": 218,
                    "region": "ARMM",
                    "proper_name": "MSMAGUINDANAO, DATODIN SINSUAT, MAGUINDANAO",
                    "device_id": 1062
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [121.08645, 5.97477]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Sulu",
                    "City_Municipality": "MT. BAYUG ECO CULTURAL, BRGY. BAYUG, TALIPAO, SULU",
                    "No": 219,
                    "region": "ARMM",
                    "proper_name": "MT. BAYUG ECO CULTURAL, BRGY. BAYUG, TALIPAO, SULU",
                    "device_id": 2065
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.2377, 7.8119]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga del Sur",
                    "City_Municipality": "MT. TIMOLAN",
                    "No": 220,
                    "region": "9",
                    "proper_name": "MT. TIMOLAN",
                    "device_id": 1641
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.076367, 6.97535]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga City",
                    "City_Municipality": "MURUK REPEATER STATION",
                    "No": 221,
                    "region": "9",
                    "proper_name": "MURUK REPEATER STATION",
                    "device_id": 1239
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.990556, 7.777222]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga Sibugay",
                    "City_Municipality": "MUYO BRIDGE",
                    "No": 222,
                    "region": "9",
                    "proper_name": "MUYO BRIDGE",
                    "device_id": 788
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.277139, 8.009069]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Lanao del Sur",
                    "City_Municipality": "NEW CAPITOL COMPLEX, MARAWI CITY",
                    "No": 223,
                    "region": "ARMM",
                    "proper_name": "NEW CAPITOL COMPLEX, MARAWI CITY",
                    "device_id": 590
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.82408, 7.58712]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao del Norte",
                    "City_Municipality": "NEW CORELLA",
                    "No": 224,
                    "region": "11",
                    "proper_name": "NEW CORELLA",
                    "device_id": 726
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.013774, 7.402992]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Compostela Valley",
                    "City_Municipality": "NEW LEYTE",
                    "No": 225,
                    "region": "11",
                    "proper_name": "NEW LEYTE",
                    "device_id": 724
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.721556, 8.157153]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Misamis Occidental",
                    "City_Municipality": "NMSC COMPOUND",
                    "No": 226,
                    "region": "10",
                    "proper_name": "NMSC COMPOUND",
                    "device_id": 125
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.035854, 8.217286]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Bukidnon",
                    "City_Municipality": "NOMIARC, DALWANGAN",
                    "No": 227,
                    "region": "10",
                    "proper_name": "NOMIARC, DALWANGAN",
                    "device_id": 497
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.65746, 6.51859]
                },
                "type": "Feature",
                "properties": {
                    "Province": "South Cotabato",
                    "City_Municipality": "NORALA",
                    "No": 228,
                    "region": "12",
                    "proper_name": "NORALA",
                    "device_id": 1596
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.442, 7.1776]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Maguindanao",
                    "City_Municipality": "NORTHERN KABUNTALAN MUNICIPAL HALL, MAGUINDANAO",
                    "No": 229,
                    "region": "ARMM",
                    "proper_name": "NORTHERN KABUNTALAN MUNICIPAL HALL, MAGUINDANAO",
                    "device_id": 2001
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.034139, 7.795833]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Compostela Valley",
                    "City_Municipality": "OLAYCON BRIDGE",
                    "No": 230,
                    "region": "11",
                    "proper_name": "OLAYCON BRIDGE",
                    "device_id": 1197
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.448367, 7.045247]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao Oriental",
                    "City_Municipality": "OLD MUNICIPAL HALL",
                    "No": 231,
                    "region": "11",
                    "proper_name": "OLD MUNICIPAL HALL",
                    "device_id": 733
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.22158, 6.33642]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Cotabato",
                    "City_Municipality": "OLIVERIO ELEMENTARY SCHOOL, ALTA E.",
                    "No": 232,
                    "region": "12",
                    "proper_name": "OLIVERIO ELEMENTARY SCHOOL, ALTA E.",
                    "device_id": 2029
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.132528, 8.152028]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Bukidnon",
                    "City_Municipality": "PAGASA MALAYBALAY STATION",
                    "No": 233,
                    "region": "10",
                    "proper_name": "PAGASA MALAYBALAY STATION",
                    "device_id": 123
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.13361, 7.60731]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Bukidnon",
                    "City_Municipality": "PALACAPAO",
                    "No": 234,
                    "region": "10",
                    "proper_name": "PALACAPAO",
                    "device_id": 505
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.24397, 8.1628]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao del Norte",
                    "City_Municipality": "PANABO",
                    "No": 235,
                    "region": "11",
                    "proper_name": "PANABO",
                    "device_id": 129
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [121.214167, 5.980556]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Sulu",
                    "City_Municipality": "PANAMAO MUNICIPAL HALL, PANAMAO, SULU",
                    "No": 236,
                    "region": "ARMM",
                    "proper_name": "PANAMAO MUNICIPAL HALL, PANAMAO, SULU",
                    "device_id": 784
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.8066, 8.2798]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Agusan del Sur",
                    "City_Municipality": "PANANGAN",
                    "No": 237,
                    "region": "13",
                    "proper_name": "PANANGAN",
                    "device_id": 612
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.010649, 6.967352]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao Oriental",
                    "City_Municipality": "PANIQUIAN ELEM. SCHOOL",
                    "No": 238,
                    "region": "11",
                    "proper_name": "PANIQUIAN ELEM. SCHOOL",
                    "device_id": 727
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [119.8853958, 5.0728519]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Tawi-tawi",
                    "City_Municipality": "PANLIMA SUGALA, TAWI-TAWI",
                    "No": 239,
                    "region": "ARMM",
                    "proper_name": "PANLIMA SUGALA, TAWI-TAWI",
                    "device_id": 1099
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [121.990456, 6.653408]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Isabela City",
                    "City_Municipality": "PANUNSULAN ELEMENTARY SCHOOL",
                    "No": 240,
                    "region": "9",
                    "proper_name": "PANUNSULAN ELEMENTARY SCHOOL",
                    "device_id": 2347
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.266861, 7.36919]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Maguindanao",
                    "City_Municipality": "PARANG MUNICIPAL HALL, PARANG MAGUINDANAO",
                    "No": 241,
                    "region": "ARMM",
                    "proper_name": "PARANG MUNICIPAL HALL, PARANG MAGUINDANAO",
                    "device_id": 157
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [121.90225, 7.078333]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga City",
                    "City_Municipality": "PATALON",
                    "No": 242,
                    "region": "9",
                    "proper_name": "PATALON",
                    "device_id": 686
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.779748, 7.45242]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao del Norte",
                    "City_Municipality": "PDRRM OFFICE",
                    "No": 243,
                    "region": "11",
                    "proper_name": "PDRRM OFFICE",
                    "device_id": 1476
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.050214, 7.848431]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Bukidnon",
                    "City_Municipality": "PHILRICE FIELD OFFICE, MUSUAN",
                    "No": 244,
                    "region": "10",
                    "proper_name": "PHILRICE FIELD OFFICE, MUSUAN",
                    "device_id": 501
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.423783, 7.279343]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Cotabato",
                    "City_Municipality": "PIGCAWAYAN",
                    "No": 245,
                    "region": "12",
                    "proper_name": "PIGCAWAYAN",
                    "device_id": 1117
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.492011, 8.349875]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Misamis Oriental",
                    "City_Municipality": "PIGSAG-AN",
                    "No": 246,
                    "region": "10",
                    "proper_name": "PIGSAG-AN",
                    "device_id": 281
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.677361, 7.057201]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Cotabato",
                    "City_Municipality": "PIKIT",
                    "No": 247,
                    "region": "12",
                    "proper_name": "PIKIT",
                    "device_id": 1112
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.204844, 5.821788]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Sarangani",
                    "City_Municipality": "POBLACION GLAN",
                    "No": 248,
                    "region": "12",
                    "proper_name": "POBLACION GLAN",
                    "device_id": 2097
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.51621, 9.34275]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Agusan del Norte",
                    "City_Municipality": "POBLACION",
                    "No": 249,
                    "region": "13",
                    "proper_name": "POBLACION",
                    "device_id": 712
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.823791, 7.108643]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Cotabato",
                    "City_Municipality": "POBLACION KABACAN",
                    "No": 250,
                    "region": "12",
                    "proper_name": "POBLACION KABACAN",
                    "device_id": 1115
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.84068, 7.90378]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Lanao del Norte",
                    "City_Municipality": "POBLACION SALVADOR",
                    "No": 251,
                    "region": "10",
                    "proper_name": "POBLACION SALVADOR",
                    "device_id": 1678
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.4608, 7.6532]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga del Sur",
                    "City_Municipality": "POBLACION",
                    "No": 252,
                    "region": "9",
                    "proper_name": "POBLACION",
                    "device_id": 1642
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.397222, 8.402778]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga del Norte",
                    "City_Municipality": "POLANGCO BRIDGE",
                    "No": 253,
                    "region": "9",
                    "proper_name": "POLANGCO BRIDGE",
                    "device_id": 787
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.343417, 7.968667]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Lanao del Sur",
                    "City_Municipality": "POLO DITSAAN, RAMAIN, LANAO DEL SUR",
                    "No": 254,
                    "region": "ARMM",
                    "proper_name": "POLO DITSAAN, RAMAIN, LANAO DEL SUR",
                    "device_id": 602
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.06275607, 6.22017246]
                },
                "type": "Feature",
                "properties": {
                    "Province": "South Cotabato",
                    "City_Municipality": "POLOMOLOK",
                    "No": 255,
                    "region": "12",
                    "proper_name": "POLOMOLOK",
                    "device_id": 1599
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.052254, 7.15705]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Cotabato",
                    "City_Municipality": "PRESIDENT ROXAS",
                    "No": 256,
                    "region": "12",
                    "proper_name": "PRESIDENT ROXAS",
                    "device_id": 1108
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.73000161, 6.69893359]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Sultan Kudarat",
                    "City_Municipality": "PRES. QUIRINO",
                    "No": 257,
                    "region": "12",
                    "proper_name": "PRES. QUIRINO",
                    "device_id": 1601
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.253176, 6.966671]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao Oriental",
                    "City_Municipality": "PROVINCIAL AGRICULTURE NURSERY COMPOUND",
                    "No": 258,
                    "region": "11",
                    "proper_name": "PROVINCIAL AGRICULTURE NURSERY COMPOUND",
                    "device_id": 142
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.508039, 7.081243]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao Oriental",
                    "City_Municipality": "PSHS-SMC 2",
                    "No": 260,
                    "region": "11",
                    "proper_name": "PSHS-SMC 2",
                    "device_id": 1475
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.508112, 7.084133]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao City",
                    "City_Municipality": "PSHS-SMC MINTAL",
                    "No": 261,
                    "region": "11",
                    "proper_name": "PSHS-SMC MINTAL",
                    "device_id": 1455
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.086, 7.351111]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Compostela Valley",
                    "City_Municipality": "PSTC COMPOSTELA VALLEY",
                    "No": 262,
                    "region": "11",
                    "proper_name": "PSTC COMPOSTELA VALLEY",
                    "device_id": 131
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.26, 8.254853]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Lanao del Norte",
                    "City_Municipality": "PUGAAN C3 BRIDGE",
                    "No": 263,
                    "region": "10",
                    "proper_name": "PUGAAN C3 BRIDGE",
                    "device_id": 738
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.468611, 7.332222]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao Oriental",
                    "City_Municipality": "PUROK LANSONES, PM SOBRECAREY",
                    "No": 264,
                    "region": "11",
                    "proper_name": "PUROK LANSONES, PM SOBRECAREY",
                    "device_id": 1912
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.827585, 8.770183]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Misamis Oriental",
                    "City_Municipality": "QUEZON",
                    "No": 265,
                    "region": "10",
                    "proper_name": "QUEZON",
                    "device_id": 1077
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.111389, 7.715637]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Bukidnon",
                    "City_Municipality": "QUEZON MUNICIPAL HALL",
                    "No": 266,
                    "region": "10",
                    "proper_name": "QUEZON MUNICIPAL HALL",
                    "device_id": 499
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.506084, 9.72303]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Surigao del Norte",
                    "City_Municipality": "QUEZON",
                    "No": 267,
                    "region": "13",
                    "proper_name": "QUEZON",
                    "device_id": 1568
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.71314, 9.233743]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Camiguin",
                    "City_Municipality": "Quiboro Elementary School",
                    "No": 268,
                    "region": "10",
                    "proper_name": "Quiboro Elementary School",
                    "device_id": 1066
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.419372, 8.232697]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Lanao del Norte",
                    "City_Municipality": "ROGONGON",
                    "No": 269,
                    "region": "10",
                    "proper_name": "ROGONGON",
                    "device_id": 314
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.00091, 8.38282]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Agusan del Sur",
                    "City_Municipality": "ROSARIO MUNICIPAL HALL",
                    "No": 270,
                    "region": "13",
                    "proper_name": "ROSARIO MUNICIPAL HALL",
                    "device_id": 565
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.268883, 8.033933]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Lanao del Sur",
                    "City_Municipality": "SAGUIARAN MUNICIPAL HALL, SAGUIARAN, LANAO DEL SUR",
                    "No": 271,
                    "region": "ARMM",
                    "proper_name": "SAGUIARAN MUNICIPAL HALL, SAGUIARAN, LANAO DEL SUR",
                    "device_id": 1165
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.642308, 9.05916]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Agusan del Norte",
                    "City_Municipality": "SAN ANTONIO",
                    "No": 272,
                    "region": "13",
                    "proper_name": "SAN ANTONIO",
                    "device_id": 710
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.419528, 9.778028]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Surigao del Norte",
                    "City_Municipality": "SAN FRANCISCO MUNICIPAL HALL COMPOUND",
                    "No": 273,
                    "region": "13",
                    "proper_name": "SAN FRANCISCO MUNICIPAL HALL COMPOUND",
                    "device_id": 152
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.213683, 7.078683]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga City",
                    "City_Municipality": "SANGALI",
                    "No": 274,
                    "region": "9",
                    "proper_name": "SANGALI",
                    "device_id": 1259
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.79492, 8.1961]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Misamis Occidental",
                    "City_Municipality": "SANGAY DIOT",
                    "No": 275,
                    "region": "10",
                    "proper_name": "SANGAY DIOT",
                    "device_id": 1682
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.98144, 9.2438]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Surigao del Sur",
                    "City_Municipality": "San Juan Bridge, San Juan",
                    "No": 276,
                    "region": "13",
                    "proper_name": "San Juan Bridge, San Juan",
                    "device_id": 2220
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.961061, 8.221173]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Bukidnon",
                    "City_Municipality": "SAN JUAN",
                    "No": 277,
                    "region": "10",
                    "proper_name": "SAN JUAN",
                    "device_id": 575
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.937331, 8.537376]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Bukidnon",
                    "City_Municipality": "SAN LUIS",
                    "No": 278,
                    "region": "10",
                    "proper_name": "SAN LUIS",
                    "device_id": 487
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.52153, 9.65984]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Surigao del Norte",
                    "City_Municipality": "San Pedro National High School, San Pedro",
                    "No": 279,
                    "region": "13",
                    "proper_name": "San Pedro National High School, San Pedro",
                    "device_id": 2223
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.42871, 8.55452]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga del Norte",
                    "City_Municipality": "SAN ROQUE ES",
                    "No": 280,
                    "region": "9",
                    "proper_name": "SAN ROQUE ES",
                    "device_id": 1740
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.85662, 8.54236]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Agusan del Sur",
                    "City_Municipality": "SAN VICENTE PROSPERIDAD",
                    "No": 281,
                    "region": "13",
                    "proper_name": "SAN VICENTE PROSPERIDAD",
                    "device_id": 589
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.83656, 7.84486]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Lanao del Norte",
                    "City_Municipality": "SAPAD MUNICIPAL HALL",
                    "No": 282,
                    "region": "10",
                    "proper_name": "SAPAD MUNICIPAL HALL",
                    "device_id": 1677
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.20573, 7.23098]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga City",
                    "City_Municipality": "SAPA MORO ELEM. SCHOOL",
                    "No": 283,
                    "region": "9",
                    "proper_name": "SAPA MORO ELEM. SCHOOL",
                    "device_id": 1326
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.13131, 8.1813]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga del Norte",
                    "City_Municipality": "SAYAW",
                    "No": 284,
                    "region": "9",
                    "proper_name": "SAYAW",
                    "device_id": 1836
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.6507, 7.63717]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao del Norte",
                    "City_Municipality": "SEMONG BRIDGE",
                    "No": 285,
                    "region": "11",
                    "proper_name": "SEMONG BRIDGE",
                    "device_id": 1554
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.321944, 6.459444]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Sultan Kudarat",
                    "City_Municipality": "SEN. NINOY AQUINO",
                    "No": 286,
                    "region": "12",
                    "proper_name": "SEN. NINOY AQUINO",
                    "device_id": 1424
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.775013, 8.314255]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Misamis Occidental",
                    "City_Municipality": "SETI",
                    "No": 287,
                    "region": "10",
                    "proper_name": "SETI",
                    "device_id": 1078
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.7366, 8.4377]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga Sibugay",
                    "City_Municipality": "SIAY",
                    "No": 288,
                    "region": "9",
                    "proper_name": "SIAY",
                    "device_id": 1189
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.6929, 8.8193]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Agusan del Sur",
                    "City_Municipality": "SIBAGAT MUNICIPAL HALL",
                    "No": 289,
                    "region": "13",
                    "proper_name": "SIBAGAT MUNICIPAL HALL",
                    "device_id": 563
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.75338, 8.258291]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Misamis Occidental",
                    "City_Municipality": "SINUZA",
                    "No": 290,
                    "region": "10",
                    "proper_name": "SINUZA",
                    "device_id": 1074
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.138267, 7.710983]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga del Norte",
                    "City_Municipality": "SIOCON BRIDGE",
                    "No": 291,
                    "region": "9",
                    "proper_name": "SIOCON BRIDGE",
                    "device_id": 1679
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.133606, 7.583348]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga del Norte",
                    "City_Municipality": "SIRAWAI PROPER",
                    "No": 292,
                    "region": "9",
                    "proper_name": "SIRAWAI PROPER",
                    "device_id": 2045
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.520014, 9.652722]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Surigao del Norte",
                    "City_Municipality": "SISON ELEMENTARY SCHOOL",
                    "No": 293,
                    "region": "13",
                    "proper_name": "SISON ELEMENTARY SCHOOL",
                    "device_id": 153
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.366194, 7.677697]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Compostela Valley",
                    "City_Municipality": "SITIO ANAHAW 35",
                    "No": 294,
                    "region": "11",
                    "proper_name": "SITIO ANAHAW 35",
                    "device_id": 1914
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [121.01693, 5.94847]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Sulu",
                    "City_Municipality": "SITIO BATO HABA, BRGY. MATATAL, MAIMBUNG, SULU",
                    "No": 295,
                    "region": "ARMM",
                    "proper_name": "SITIO BATO HABA, BRGY. MATATAL, MAIMBUNG, SULU",
                    "device_id": 2058
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.1237, 8.246533]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga del Norte",
                    "City_Municipality": "SITIO CALACAS",
                    "No": 296,
                    "region": "9",
                    "proper_name": "SITIO CALACAS",
                    "device_id": 1651
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.21166, 7.455778]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Compostela Valley",
                    "City_Municipality": "SITIO MAHO, BRGY. ARAGON",
                    "No": 297,
                    "region": "11",
                    "proper_name": "SITIO MAHO, BRGY. ARAGON",
                    "device_id": 1915
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.145568, 6.855248]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Maguindanao",
                    "City_Municipality": "SOUTH UPI, MAGUINDANAO",
                    "No": 298,
                    "region": "ARMM",
                    "proper_name": "SOUTH UPI, MAGUINDANAO",
                    "device_id": 2212
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [121.214617, 7.201567]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga City",
                    "City_Municipality": "SPILLWAY UPPER PASONANCA",
                    "No": 299,
                    "region": "9",
                    "proper_name": "SPILLWAY UPPER PASONANCA",
                    "device_id": 745
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.03271, 8.00983]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Agusan del Sur",
                    "City_Municipality": "STA ISABEL",
                    "No": 300,
                    "region": "13",
                    "proper_name": "STA ISABEL",
                    "device_id": 571
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.1593, 8.01986]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Agusan del Sur",
                    "City_Municipality": "STA MARIA ELEM SCHOOL",
                    "No": 301,
                    "region": "13",
                    "proper_name": "STA MARIA ELEM SCHOOL",
                    "device_id": 569
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.470199, 6.555313]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao del Sur",
                    "City_Municipality": "STA.MARIA MUNICIPAL HALL",
                    "No": 302,
                    "region": "11",
                    "proper_name": "STA.MARIA MUNICIPAL HALL",
                    "device_id": 1288
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.22329, 7.30758]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga Sibugay",
                    "City_Municipality": "STO. NINO BRIDGE, TUNGAWAN",
                    "No": 303,
                    "region": "9",
                    "proper_name": "STO. NINO BRIDGE, TUNGAWAN",
                    "device_id": 2057
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.67961717, 6.42814786]
                },
                "type": "Feature",
                "properties": {
                    "Province": "South Cotabato",
                    "City_Municipality": "STO. NINO, SC",
                    "No": 304,
                    "region": "12",
                    "proper_name": "STO. NINO, SC",
                    "device_id": 1594
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.586333, 8.185639]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Bukidnon",
                    "City_Municipality": "STO. NINO",
                    "No": 305,
                    "region": "10",
                    "proper_name": "STO. NINO",
                    "device_id": 285
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.3535, 7.25]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao City",
                    "City_Municipality": "SUAWAN BRIDGE",
                    "No": 306,
                    "region": "11",
                    "proper_name": "SUAWAN BRIDGE",
                    "device_id": 1193
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.477278, 9.663402]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Surigao del Norte",
                    "City_Municipality": "SUKAILANG",
                    "No": 307,
                    "region": "13",
                    "proper_name": "SUKAILANG",
                    "device_id": 1575
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.6024913, 6.8840627]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Maguindanao",
                    "City_Municipality": "SULTAN SA BARONGIS MUNICIPAL HALL, MAGUINDANAO",
                    "No": 308,
                    "region": "ARMM",
                    "proper_name": "SULTAN SA BARONGIS MUNICIPAL HALL, MAGUINDANAO",
                    "device_id": 1125
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [121.00095, 6.04346]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Sulu",
                    "City_Municipality": "SULPROVINCIAL POLICE OFFICE, CAMP ASTURIAS, JOLO, SULU",
                    "No": 309,
                    "region": "ARMM",
                    "proper_name": "SULPROVINCIAL POLICE OFFICE, CAMP ASTURIAS, JOLO, SULU",
                    "device_id": 2062
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.626858, 8.825895]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Agusan del Norte",
                    "City_Municipality": "SUMILE",
                    "No": 310,
                    "region": "13",
                    "proper_name": "SUMILE",
                    "device_id": 706
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.034533, 6.4198]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Basilan",
                    "City_Municipality": "SUMISIP MUNICIPAL HALL, SUMISIP, BASILAN",
                    "No": 311,
                    "region": "ARMM",
                    "proper_name": "SUMISIP MUNICIPAL HALL, SUMISIP, BASILAN",
                    "device_id": 1094
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [123.06676, 7.87125]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga del Sur",
                    "City_Municipality": "SUPON ELEMENTARY",
                    "No": 312,
                    "region": "9",
                    "proper_name": "SUPON ELEMENTARY",
                    "device_id": 1734
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.74772386, 6.37533565]
                },
                "type": "Feature",
                "properties": {
                    "Province": "South Cotabato",
                    "City_Municipality": "SURALLAH",
                    "No": 313,
                    "region": "12",
                    "proper_name": "SURALLAH",
                    "device_id": 1593
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.023727, 7.072498]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga City",
                    "City_Municipality": "TABU-TABBMS",
                    "No": 314,
                    "region": "9",
                    "proper_name": "TABU-TABBMS",
                    "device_id": 1244
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.6763688, 6.69208611]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Sultan Kudarat",
                    "City_Municipality": "TACURONG",
                    "No": 315,
                    "region": "12",
                    "proper_name": "TACURONG",
                    "device_id": 1609
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.911067, 8.414867]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Bukidnon",
                    "City_Municipality": "TAGOLOAN BRIDGE II",
                    "No": 316,
                    "region": "10",
                    "proper_name": "TAGOLOAN BRIDGE II",
                    "device_id": 1233
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.7558222, 8.5421528]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Misamis Oriental",
                    "City_Municipality": "TAGOLOAN BRIDGE",
                    "No": 317,
                    "region": "10",
                    "proper_name": "TAGOLOAN BRIDGE",
                    "device_id": 489
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.233591, 9.016448]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Surigao del Sur",
                    "City_Municipality": "TAGO POBLACION",
                    "No": 318,
                    "region": "13",
                    "proper_name": "TAGO POBLACION",
                    "device_id": 1574
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.784946, 8.449327]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Agusan del Sur",
                    "City_Municipality": "TALACOGON MUNICIPAL HALL",
                    "No": 319,
                    "region": "13",
                    "proper_name": "TALACOGON MUNICIPAL HALL",
                    "device_id": 606
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.571777, 7.631437]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao del Norte",
                    "City_Municipality": "TALAINGOD MUNICIPAL HALL",
                    "No": 320,
                    "region": "11",
                    "proper_name": "TALAINGOD MUNICIPAL HALL",
                    "device_id": 1457
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.35605, 6.984333]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Maguindanao",
                    "City_Municipality": "TALAYAN MUNICIPAL HALL, TALAYAN, MAGUINDANAO",
                    "No": 321,
                    "region": "ARMM",
                    "proper_name": "TALAYAN MUNICIPAL HALL, TALAYAN, MAGUINDANAO",
                    "device_id": 1167
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.482, 6.77237]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Maguindanao",
                    "City_Municipality": "TALIWASA BRIDGE DATABDULLAH SANGKI, MAGUINDANAO",
                    "No": 322,
                    "region": "ARMM",
                    "proper_name": "TALIWASA BRIDGE DATABDULLAH SANGKI, MAGUINDANAO",
                    "device_id": 852
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.37884, 7.13236]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao City",
                    "City_Municipality": "TAMAYONG ELEMENTARY SCHOOL ",
                    "No": 323,
                    "region": "11",
                    "proper_name": "TAMAYONG ELEMENTARY SCHOOL ",
                    "device_id": 2109
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.961111, 6.470278]
                },
                "type": "Feature",
                "properties": {
                    "Province": "South Cotabato",
                    "City_Municipality": "TAMPAKAN",
                    "No": 324,
                    "region": "12",
                    "proper_name": "TAMPAKAN",
                    "device_id": 1595
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.39929, 7.25]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao City",
                    "City_Municipality": "TAMUGAN",
                    "No": 325,
                    "region": "11",
                    "proper_name": "TAMUGAN",
                    "device_id": 1194
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.748333, 6.618889]
                },
                "type": "Feature",
                "properties": {
                    "Province": "South Cotabato",
                    "City_Municipality": "TANTANGAN",
                    "No": 326,
                    "region": "12",
                    "proper_name": "TANTANGAN",
                    "device_id": 1591
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.02328, 7.383583]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Compostela Valley",
                    "City_Municipality": "TERESA NATIONAL HIGH SCHOOL, BRGY. TERESA ",
                    "No": 327,
                    "region": "11",
                    "proper_name": "TERESA NATIONAL HIGH SCHOOL, BRGY. TERESA ",
                    "device_id": 2111
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.038571, 8.94671]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Surigao del Sur",
                    "City_Municipality": "TINA",
                    "No": 328,
                    "region": "13",
                    "proper_name": "TINA",
                    "device_id": 780
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.120917, 6.500633]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Basilan",
                    "City_Municipality": "TIPO-TIPO MUNICIPAL HALL, TIPO-TIPO, BASILAN",
                    "No": 329,
                    "region": "ARMM",
                    "proper_name": "TIPO-TIPO MUNICIPAL HALL, TIPO-TIPO, BASILAN",
                    "device_id": 1088
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.559483, 7.866883]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga Sibugay",
                    "City_Municipality": "TITAY",
                    "No": 330,
                    "region": "9",
                    "proper_name": "TITAY",
                    "device_id": 1170
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.56975, 9.55373]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Surigao del Norte",
                    "City_Municipality": "TUBOD MUNICIPAL HALL",
                    "No": 331,
                    "region": "13",
                    "proper_name": "TUBOD MUNICIPAL HALL",
                    "device_id": 708
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.21589, 6.59934]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Basilan",
                    "City_Municipality": "TUBURAN POLICE STATION, TUBURAN, BASILAN",
                    "No": 332,
                    "region": "ARMM",
                    "proper_name": "TUBURAN POLICE STATION, TUBURAN, BASILAN",
                    "device_id": 1083
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.405544, 6.918857]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao del Sur",
                    "City_Municipality": "TUDAYA ELEMENTARY SCHOOL",
                    "No": 333,
                    "region": "11",
                    "proper_name": "TUDAYA ELEMENTARY SCHOOL",
                    "device_id": 1192
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.874138, 6.831186]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Cotabato",
                    "City_Municipality": "TULUNAN",
                    "No": 334,
                    "region": "12",
                    "proper_name": "TULUNAN",
                    "device_id": 1113
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.421083, 7.6014]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga Sibugay",
                    "City_Municipality": "TUNGAWAN",
                    "No": 335,
                    "region": "9",
                    "proper_name": "TUNGAWAN",
                    "device_id": 1171
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.7407377, 7.0776456]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Maguindanao",
                    "City_Municipality": "TUNGGOL BRIDGE, DATMONTAWAL, MAGUINDANAO",
                    "No": 336,
                    "region": "ARMM",
                    "proper_name": "TUNGGOL BRIDGE, DATMONTAWAL, MAGUINDANAO",
                    "device_id": 754
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [124.9507785, 6.330907]
                },
                "type": "Feature",
                "properties": {
                    "Province": "South Cotabato",
                    "City_Municipality": "TUPI MUNICIPAL HALL",
                    "No": 337,
                    "region": "12",
                    "proper_name": "TUPI MUNICIPAL HALL",
                    "device_id": 562
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.096198, 7.814824]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Compostela Valley",
                    "City_Municipality": "UNION BRIDGE",
                    "No": 338,
                    "region": "11",
                    "proper_name": "UNION BRIDGE",
                    "device_id": 1286
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.18261, 7.81183]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga del Norte",
                    "City_Municipality": "UPPER TANAWAN",
                    "No": 339,
                    "region": "9",
                    "proper_name": "UPPER TANAWAN",
                    "device_id": 1888
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.126056, 7.940309]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Bukidnon",
                    "City_Municipality": "VALENCIA BRIDGE",
                    "No": 340,
                    "region": "10",
                    "proper_name": "VALENCIA BRIDGE",
                    "device_id": 635
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.95547, 8.0693]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Agusan del Sur",
                    "City_Municipality": "VERUELA MUNICIPAL HALL",
                    "No": 341,
                    "region": "13",
                    "proper_name": "VERUELA MUNICIPAL HALL",
                    "device_id": 567
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [122.285833, 7.366667]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Zamboanga City",
                    "City_Municipality": "VITALI BRIDGE",
                    "No": 342,
                    "region": "9",
                    "proper_name": "VITALI BRIDGE",
                    "device_id": 778
                }
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [125.582833, 7.131886]
                },
                "type": "Feature",
                "properties": {
                    "Province": "Davao City",
                    "City_Municipality": "WAAN BRIDGE",
                    "No": 343,
                    "region": "11",
                    "proper_name": "WAAN BRIDGE",
                    "device_id": 1177
                }
            }
        ]
    }
    var map;
    var vectorSource = new ol.source.Vector({
        features: (new ol.format.GeoJSON()).readFeatures(jsonObj)
    });
    var vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: pointStyleFunction
    });
    var container = $('#container');
    var other_info = $('#max_rainfall, #accum');
    var max_rainfall = $('#max_rainfall');
    var accum = $('#accum');
    var x = document.getElementById("myAudio");
    var y = document.getElementById("snackbar")



    function colorize() {
        var arr_id = [138, 959, 1285, 1858, 739, 596, 566, 1118, 2110, 1110, 1453, 1109, 760, 1322, 570, 782, 1198, 1065, 795, 1672, 797, 1214, 158, 781, 1229, 1592, 957, 1119, 128, 2047, 205, 1371, 1563, 280, 564, 592, 725, 496, 1744, 1743, 1567, 728, 2096, 958, 1461, 156, 1638, 1699, 985, 1698, 1450, 1877, 1656, 2163, 1323, 1645, 130, 2170, 1683, 1639, 2024, 2221, 2027, 2028, 1565, 1458, 1674, 1878, 1880, 954, 851, 955, 1640, 1456, 1671, 1680, 2032, 983, 1653, 1564, 1654, 643, 1242, 1627, 118, 711, 1240, 1625, 1196, 2060, 1843, 729, 779, 110, 1577, 135, 1561, 1566, 730, 311, 1459, 126, 154, 1962, 1664, 1423, 960, 1634, 743, 124, 1087, 498, 2222, 2175, 1735, 1837, 587, 1597, 769, 1562, 1162, 607, 1191, 608, 707, 1241, 1600, 609, 1576, 1204, 1589, 1649, 2055, 731, 1076, 1643, 1742, 768, 857, 488, 1169, 1840, 576, 713, 1607, 1199, 1152, 111, 1913, 133, 965, 1121, 1961, 279, 2030, 155, 134, 2064, 613, 597, 1289, 1598, 1657, 1608, 1741, 961, 1606, 1626, 1120, 723, 1624, 591, 1386, 1063, 1610, 1588, 1666, 1107, 2048, 588, 1460, 1168, 709, 1587, 1106, 1590, 1203, 1675, 1287, 1216, 561, 1082, 1284, 568, 732, 1449, 842, 500, 1166, 982, 1111, 611, 1573, 1650, 1841, 1454, 549, 956, 1116, 1064, 1195, 1114, 2035, 159, 1062, 2065, 1641, 1239, 788, 590, 726, 724, 125, 497, 1596, 2001, 1197, 733, 2029, 123, 505, 129, 784, 612, 727, 1099, 2347, 157, 686, 1476, 501, 1117, 281, 1112, 2097, 712, 1115, 1678, 1642, 787, 602, 1599, 1108, 1601, 142, 1475, 1455, 131, 738, 1912, 1077, 499, 1568, 1066, 314, 565, 1165, 710, 152, 1259, 1682, 2220, 575, 487, 2223, 1740, 589, 1677, 1326, 1836, 1554, 1424, 1078, 1189, 563, 1074, 1679, 2045, 153, 1914, 2058, 1651, 1915, 2212, 745, 571, 569, 1288, 2057, 1594, 285, 1193, 1575, 1125, 2062, 706, 1094, 1734, 1593, 1244, 1609, 1233, 489, 1574, 606, 1457, 1167, 852, 2109, 1595, 1194, 1591, 2111, 780, 1088, 1170, 708, 1083, 1192, 1113, 1171, 754, 562, 1286, 1888, 635, 567, 778, 1177];
        //var arr_id = [711, 779, 707, 713, 155, 611, 712, 710, 706, 739, 118, 138, 959, 1285, 1858, 739, 596, 566, 1118, 2110, 1110, 1453, 1109, 760, 1322];
        for (var k = 0; k < arr_id.length; k++) {
            plotARGs(arr_id[k])
        }
    }

    function pointStyleFunction(feature, res) {
        var resolution = res * 1000000;
        var intensity = feature.get('rain_intensity');
        var style;
        if (intensity === -1) {
            style = new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 7,
                    fill: new ol.style.Fill({color: '#000'}),
                    stroke: new ol.style.Stroke({color: '#000', width: 1})
                }),
                text: createTextStyle(feature, resolution)
            });
        } else if (intensity === 0) {
            style = new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 7,
                    fill: new ol.style.Fill({color: '#fff'}),
                    stroke: new ol.style.Stroke({color: '#000', width: 1})
                }),
                text: createTextStyle(feature, resolution)
            });
        } else if ((intensity > 0 ) && (intensity <= 2.5 )) {
            style = new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 7,
                    fill: new ol.style.Fill({color: '#86e3e7'}),
                    stroke: new ol.style.Stroke({color: '#000', width: 1})
                }),
                text: createTextStyle(feature, resolution)
            });
        } else if ((intensity > 2.5 ) && (intensity <= 7.5 )) {
            style = new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 7,
                    fill: new ol.style.Fill({color: '#8aa7fd'}),
                    stroke: new ol.style.Stroke({color: '#000', width: 1})
                }),
                text: createTextStyle(feature, resolution)
            });
        } else if ((intensity > 7.5 ) && (intensity <= 15 )) {
            style = new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 7,
                    fill: new ol.style.Fill({color: '#8686dc'}),
                    stroke: new ol.style.Stroke({color: '#000', width: 1})
                }),
                text: createTextStyle(feature, resolution)
            });
        } else if ((intensity > 15 ) && (intensity <= 30 )) {
            style = new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 7,
                    fill: new ol.style.Fill({color: '#fed88d'}),
                    stroke: new ol.style.Stroke({color: '#000', width: 1})
                }),
                text: createTextStyle(feature, resolution)
            });
        } else if (intensity > 30) {
            style = new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 7,
                    fill: new ol.style.Fill({color: '#fe9686'}),
                    stroke: new ol.style.Stroke({color: '#000', width: 1})
                }),
                text: createTextStyle(feature, resolution)
            });
        } else if (intensity == -2) {
            style = new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 7,
                    fill: new ol.style.Fill({color: '#a52a2a'}),
                    stroke: new ol.style.Stroke({color: '#000', width: 1})
                }),
                text: createTextStyle(feature, resolution)
            });
        } else {
            style = new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 7,
                    fill: new ol.style.Fill({color: '#fff'}),
                    stroke: new ol.style.Stroke({
                        color: 'blue',
                        lineDash: [2],
                        width: 1
                    })
                }),
                text: createTextStyle(feature, resolution)
            });
        }

        return style
    }

    String.prototype.trunc = String.prototype.trunc ||
        function (n) {
            return this.length > n ? this.substr(0, n - 1) + '...' : this.substr(0);
        };

    var getText = function (feature, resolution) {
        var type = 'shorten';
        var maxResolution = 700;
        var text = feature.get('proper_name');
        var intensity = feature.get('rain_intensity');
        if (resolution > maxResolution) {
            if (intensity > 0) {
                text = text.trunc(20) + ' (' + intensity + ' mm/hr.)';
            } else {
                text = '';
            }
        }
        else if (type == 'shorten') {
            if (intensity > 0) {
                text = text.trunc(20) + ' (' + intensity + ' mm/hr.)';
            } else {
                text = text.trunc(20);
            }
        }
        return text;
    };

    var createTextStyle = function (feature, resolution) {
        var align = 'left';
        var baseline = 'middle';
        var size = '10px';
        var offsetX = 10;
        var offsetY = 0;
        var weight = 'normal';
        var rotation = 0;
        var font = weight + ' ' + size + ' ' + 'Arial';
        var fillColor = 'blue';
        var outlineColor = '#fff';
        var outlineWidth = 3;

        return new ol.style.Text({
            textAlign: align,
            textBaseline: baseline,
            font: font,
            text: getText(feature, resolution),
            fill: new ol.style.Fill({color: fillColor}),
            stroke: new ol.style.Stroke({color: outlineColor, width: outlineWidth}),
            offsetX: offsetX,
            offsetY: offsetY,
            rotation: rotation
        });
    };

    function stationNames() {
        var stations = [];
        var json_len = jsonObj.features.length;
        for (var i = 0; i < json_len; i++) {
            var gauge_name = jsonObj.features[i].properties.proper_name;
            stations.push(gauge_name);
        }
        return stations;
    }

    var InsertToCanvas = (function () {
        function writeLegendtoCanvas(evt) {
            var ctx = evt.context;
            var width = ctx.canvas.width;
            var padding = width - 130;
            var circpadding = width - 140;
            var paddingtop = 45;
            var start = width - 155;

            ctx.beginPath();
            ctx.lineWidth = 4;
            ctx.setLineDash([]);
            ctx.moveTo(start, 15);
            ctx.lineTo(width - 15, 15);
            ctx.lineTo(width - 15, 180);
            ctx.lineTo(start, 180);
            ctx.lineTo(start, 15);
            ctx.strokeStyle = "rgba(255, 255, 255, .30)";
            ctx.stroke();


            ctx.beginPath();
            ctx.fillStyle = "rgba(0, 60, 136, .4)";
            ctx.fillRect(width - 155, 15, 140, 165);
            ctx.closePath();

            ctx.beginPath();
            ctx.font = "bold 12px Arial ";
            ctx.fillStyle = "#fff";
            var rainintensity = 'RAINFALL INTENSITY';
            ctx.fillText(rainintensity, width - 150, 30);
            ctx.closePath();

            //No Rain
            ctx.beginPath();
            ctx.arc(circpadding, paddingtop, 8, 0, 2 * Math.PI);
            ctx.fillStyle = '#FFF';
            ctx.fill();
            ctx.lineWidth = 1;
            ctx.setLineDash([]);
            ctx.strokeStyle = '#000';
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.font = "bold 12px Arial ";
            ctx.fillStyle = "#fff";
            var norain = 'No Rain';
            ctx.fillText(norain, padding, 50);
            ctx.closePath();
            //end no rain


            //light
            ctx.beginPath();
            ctx.arc(circpadding, paddingtop + 20, 8, 0, 2 * Math.PI);
            ctx.fillStyle = '#87E2E5';
            ctx.fill();
            ctx.lineWidth = 1;
            ctx.setLineDash([]);
            ctx.strokeStyle = '#000';
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.font = "bold 12px Arial ";
            ctx.fillStyle = "#fff";
            var light = 'Light';
            ctx.fillText(light, padding, 70);
            ctx.closePath();
            //end light

            ctx.beginPath();
            ctx.arc(circpadding, paddingtop + 40, 8, 0, 2 * Math.PI);
            ctx.fillStyle = '#8CA7FE';
            ctx.fill();
            ctx.lineWidth = 1;
            ctx.setLineDash([]);
            ctx.strokeStyle = '#000';
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.font = "bold 12px Arial ";
            ctx.fillStyle = "#fff";
            var moderate = 'Moderate';
            ctx.fillText(moderate, padding, 90);
            ctx.closePath();

            //heavy
            ctx.beginPath();
            ctx.arc(circpadding, paddingtop + 60, 8, 0, 2 * Math.PI);
            ctx.fillStyle = '#8687DA';
            ctx.fill();
            ctx.lineWidth = 1;
            ctx.setLineDash([]);
            ctx.strokeStyle = '#000';
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.font = "bold 12px Arial ";
            ctx.fillStyle = "#fff";
            var heavy = 'Heavy';
            ctx.fillText(heavy, padding, 110);
            ctx.closePath();
            //heavy


            //intense
            ctx.beginPath();
            ctx.arc(circpadding, paddingtop + 80, 8, 0, 2 * Math.PI);
            ctx.fillStyle = '#FFD791';
            ctx.fill();
            ctx.lineWidth = 1;
            ctx.setLineDash([]);
            ctx.strokeStyle = '#000';
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.font = "bold 12px Arial ";
            ctx.fillStyle = "#fff";
            var intense = 'Intense';
            ctx.fillText(intense, padding, 130);
            ctx.closePath();
            //intense


            //intense
            ctx.beginPath();
            ctx.arc(circpadding, paddingtop + 100, 8, 0, 2 * Math.PI);
            ctx.fillStyle = '#FD9685';
            ctx.fill();
            ctx.lineWidth = 1;
            ctx.setLineDash([]);
            ctx.strokeStyle = '#000';
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.font = "bold 12px Arial ";
            ctx.fillStyle = "#fff";
            var torrential = 'Torrential';
            ctx.fillText(torrential, padding, 150);
            ctx.closePath();
            //intense


            //no data
            ctx.beginPath();
            ctx.arc(circpadding, paddingtop + 120, 8, 0, 2 * Math.PI);
            ctx.fillStyle = '#000';
            ctx.fill();
            ctx.lineWidth = 1;
            ctx.setLineDash([]);
            ctx.strokeStyle = '#000';
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.font = "bold 12px Arial ";
            ctx.fillStyle = "#fff";
            var nodata = 'No Data';
            ctx.fillText(nodata, padding, 170);
            ctx.closePath();
            //end no data

            ctx.beginPath();
            ctx.arc(circpadding, paddingtop + 160, 8, 0, 2 * Math.PI);
            ctx.fillStyle = '#fff';
            ctx.fill();
            ctx.lineWidth = 1;
            ctx.setLineDash([4, 2]);
            ctx.strokeStyle = 'blue';
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.font = "bold 12px Arial ";
            ctx.fillStyle = "#000";
            var inac = 'Checking Data';
            ctx.fillText(inac, padding, 210);
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(circpadding, paddingtop + 185, 8, 0, 2 * Math.PI);
            ctx.fillStyle = '#a52a2a';
            ctx.fill();
            ctx.lineWidth = 1;
            ctx.setLineDash([]);
            ctx.strokeStyle = '#000';
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.font = "bold 12px Arial ";
            ctx.fillStyle = "#000";
            var inacc = 'Inaccessible';
            ctx.fillText(inacc, padding, 235);
            ctx.closePath();
        }

        function postcompose() {
            map.on('postcompose', function (evt) {
                writeLegendtoCanvas(evt);
            });
        }

        return {
            postcompose: postcompose
        };
    })();

    function plotARGs(dev_id) {
        var getData = $.ajax({url: "/device/", type: "GET", dataType: "json", data: {dev_id: dev_id}});
        getData.done(function (data) {
            var data_len = data['data'].length;
            var rainfall_data = data['data'];
            var dev_id = data['dev_id'];
            var loc = data['location'];
            var rainVal = data['data'];
            var prov = data['province'];
            var mun = data['municipality'];
            var lon = parseFloat(data['longitude']);
            var lat = parseFloat(data['latitude']);
            var latest_rainval;
            var new_json = {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [lon, lat]
                },
                "properties": {
                    "proper_name": loc.toUpperCase(),
                    "device_id": dev_id,
                    "rain_intensity": 0,
                    "province": prov,
                    "municipality": mun,
                    "data": rainfall_data
                }
            };

            if (data_len > 0) {
                latest_rainval = parseFloat(rainVal[data_len - 1]['rain_value'] * 4);
                new_json['properties']['rain_intensity'] = latest_rainval;
                if (latest_rainval > 15) {
                    x.play();
                    var options =  {
                        content: "Please monitor the rainfall condition in "+new_json['properties']['proper_name'] ,
                        style: "snackbar",
                        timeout: 10000,
                        htmlAllowed: true,
                        onClose: function(){}
                    }
                    $.snackbar(options);
                }

            } else {
                new_json['properties']['data'] = [];
                new_json['properties']['rain_intensity'] = -1;
            }
            var feats = vectorSource.getFeatures();
            for (var i = 0; i < feats.length; i++) {
                if (new_json['properties']['device_id'] == feats[i].R['device_id']) {
                    vectorSource.removeFeature(feats[i]);
                }
            }
            var features = new ol.format.GeoJSON().readFeatures(new_json);
            vectorLayer.getSource().addFeatures(features);
            console.log(new_json['properties']['proper_name'])
        }).fail(function () {
                var coords, proper_name, province, municipality;
                var feats = vectorSource.getFeatures();
                for (var i = 0; i < feats.length; i++) {
                    if (dev_id == feats[i].R['device_id']) {
                        vectorSource.removeFeature(feats[i]);
                        coords = feats[i].R['geometry'].A;
                        proper_name = feats[i].R['proper_name'];
                        province = feats[i].R['Province'];
                        municipality = feats[i].R['City_Municipality'];
                    }
                }
                var new_json = {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": coords
                    },
                    "properties": {
                        "proper_name": proper_name.toUpperCase(),
                        "device_id": dev_id,
                        "rain_intensity": -2,
                        "province": province,
                        "municipality": municipality,
                        "data": []
                    }
                };
                var features = new ol.format.GeoJSON().readFeatures(new_json);
                vectorLayer.getSource().addFeatures(features);
                console.error('Error!')
            });
    }

    function get_station(station_name, mun, prov, data) {
        var theModal = $("#modal-content").modal({
            show: false
        });
        other_info.hide();
        container.html("<br/><br/><center><p>Getting <strong>" + station_name + "</strong> data. Please wait.</p></center><br/>");
        var locs = mun + ', ' + prov;
        var rainVal;
        rainVal = data;
        var rainVal_len = data.length;
        if (rainVal_len == 0) {
            theModal.modal("show");
            theModal.on('shown.bs.modal', function () {
                 other_info.hide();
                 container.html('<br/><center><strong><p style="color:red">No data available or inaccessible as of the moment...try again later.</p></strong></center>');
            })
        } else {
            var finalAccum = [],
                a = [],
                o = [],
                tofixAccum,
                tofixRainVal,
                firstDate,
                lastDate,
                getIndex = 0,
                diffHours = 0;
            for (var k = 0; k < rainVal.length; k++) {
                lastDate = rainVal[rainVal.length - k - 1]['dateTimeRead'];
                firstDate = rainVal[rainVal.length - 1]['dateTimeRead'];
                diffHours = (Math.abs(lastDate - firstDate) / 36e5) * 1000;
                if ((diffHours >= 23) && (diffHours <= 24)) {
                    getIndex = parseInt(rainVal.length - k - 1);

                }
            }

            for (var i = getIndex; i < rainVal_len; i++) {
                var accumRain = parseFloat(rainVal[i]['rain_value']);
                finalAccum = parseFloat(finalAccum + accumRain);
                var rainValpH = rainVal[i]['rain_value'] * 4;
                tofixAccum = finalAccum.toFixed(1);
                tofixRainVal = rainValpH.toFixed(1);
                var tt = (rainVal[i]['dateTimeRead'] + 28800) * 1000;
                a.push([tt, parseFloat(tofixAccum)]), o.push([tt, parseFloat(tofixRainVal)]);
            }


            theModal.modal("show");
            theModal.on('shown.bs.modal', function () {
                other_info.show();
                var aLen = a.length - 1;
                var options = {
                    chart: {
                        renderTo: 'container',
                        type: 'line',
                        height: 450,
                        alignTicks: false
                    },
                    credits: false,
                    title: {
                        text: "Rainfall in " + station_name
                    },
                    subtitle: {
                        text: 'Location: ' + locs + ' <br/> Source: <a href="http://asti.dost.gov.ph/" target="_blank">DOST-ASTI</a>',
                        x: -20
                    },
                    xAxis: {
                        type: "datetime",
                        labels: {
                            formatter: function () {
                                return Highcharts.dateFormat("%b %e, %Y %I:%M %p", this.value);
                            },
                            padding: 15,
                            align: "center",
                            style: {
                                fontSize: "10px"
                            }
                        }
                    },
                    tooltip: {
                        formatter: function () {
                            if ("Rainfall Intensity" != this.series.name) return Highcharts.dateFormat("%b %e, %Y %I:%M %p", new Date(this.x)) + "<br/>" + this.series.name + ": <b>" + this.y + " mm</b>";
                            else return Highcharts.dateFormat("%b %e, %Y %I:%M %p", new Date(this.x)) + "<br/>" + this.series.name + ": <b>" + this.y + " mm/hr.</b>";
                        },
                        style: {
                            fontSize: "11px"
                        }
                    },
                    yAxis: [
                        { //primary y axis
                            min: 0,
                            max: 100,
                            tickInterval: 20,
                            title: {
                                text: "Rainfall Intensity, mm/hr."
                            },
                            reversed: !0,
                            plotLines: [
                                {
                                    value: 0,
                                    width: 1,
                                    color: "#808080"
                                }
                            ],
                            plotBands: [
                                {
                                    color: '#86e3e7',
                                    from: 0,
                                    to: 2.5,
                                    label: {
                                        text: 'Light',
                                        align: 'left',
                                        x: 10
                                    }
                                },
                                {
                                    color: '#8aa7fd',
                                    from: 2.5,
                                    to: 7.5,
                                    label: {
                                        text: 'Moderate',
                                        align: 'left',
                                        x: 10
                                    }
                                },
                                {
                                    color: '#8686dc',
                                    from: 7.5,
                                    to: 15,
                                    label: {
                                        text: 'Heavy',
                                        align: 'left',
                                        x: 10
                                    }
                                },
                                {
                                    color: '#fed88d',
                                    from: 15,
                                    to: 30,
                                    label: {
                                        text: 'Intense',
                                        align: 'left',
                                        x: 10
                                    }
                                },
                                {
                                    color: '#fe9686',
                                    from: 30,
                                    to: 50000,
                                    label: {
                                        text: 'Torrential',
                                        align: 'left',
                                        x: 10
                                    }
                                }

                            ]
                        },
                        { //secondary y axis
                            title: {
                                text: "Accumulated Rainfall, mm"
                            },
                            plotLines: [
                                {
                                    value: 0,
                                    width: 1,
                                    color: "#808080"
                                }
                            ],
                            opposite: !0,
                            min: 0,
                            max: 200,
                            tickInterval: 40,
                            startOnTick: false,
                            endOnTick: false,
                            reversed: !1
                        }
                    ],
                    gridLineDashStyle: 'solid',
                    series: [
                        {
                            name: "Rainfall Intensity",
                            data: o,
                            tooltip: {
                                valueSuffix: "  mm/hr."
                            },
                            color: "#0000ff"
                        },
                        {
                            name: "Accumulated Rainfall",
                            data: a,
                            tooltip: {
                                valueSuffix: " mm"
                            },
                            yAxis: 1,
                            color: "#ff0000"
                        }
                    ]
                };
                var chart = new Highcharts.Chart(options);
                var max = chart.yAxis[0].dataMax,
                    arr = [],
                    myIndex = [],
                    s = chart.series[0],
                    len = s.data.length;

                //getting the latest index with max value in y-axis
                for (var j = 0; j < len; j++) {
                    arr[j] = chart.series[0].data[j].y;
                    if (arr[j] === max) {
                        myIndex.push(j);
                    }
                }

                var maxIndex = Math.max.apply(Math, myIndex);
                var realDate = Highcharts.dateFormat("%b %e, %Y %I:%M %p", new Date(o[maxIndex][0]));
                var finalData = a[aLen][1];

                if (max > 0) {
                    max_rainfall.html("Maximum Rainfall Intensity: <strong>" + max + " mm/hr</strong> on " + realDate)
                } else {
                    max_rainfall.html("Maximum Rainfall Intensity: <strong>" + max + " mm/hr</strong>")
                }
                if (diffHours >= 24) {
                    accum.html("Total Accumulated Rainfall in the last 24 hrs.: <strong>" + finalData + " mm</strong>")
                } else {
                    accum.html("Total Accumulated Rainfall: <strong>" + finalData + " mm</strong>")
                }

            });
            theModal.on('hidden.bs.modal', function () {
                container.empty();
            });


        }
    }

    function resetView() {
        var view = new ol.View({
            projection: 'EPSG:4326',
            center: [124.50806, 8.00593],
            zoom: 8,
            maxZoom: 19,
            minZoom: 7
        });
        map.setView(view)
    }

    function filterRainfall(gaugeS) {
        var feats = vectorSource.getFeatures();
        for (var i = 0; i < feats.length; i++) {
            if (gaugeS == feats[i].R['proper_name']) {
                var geoms = feats[i].getGeometry();
                var view = new ol.View({
                    projection: 'EPSG:4326',
                    center: geoms.A,
                    zoom: 18,
                    maxZoom: 19,
                    minZoom: 7
                });
                map.setView(view)
            }
        }
    }

    var displayFeatureInfo = function (pixel) {
        info.css({
            left: pixel[0] + 'px',
            top: (pixel[1] - 5) + 'px'
        });
        var feature = map.forEachFeatureAtPixel(pixel, function (feature) {
            return feature;
        });
        if (feature) {
            if (map.getView().getZoom() < 11) {
                var locs = feature.get('rain_intensity') > 0 ? 'Click to view details in graph.' : feature.get('proper_name');
                info.tooltip('hide')
                    .attr('data-original-title', locs)
                    .tooltip('fixTitle')
                    .tooltip('show');
            }

        } else {
            info.tooltip('hide');
        }
    };
    var info = $('#info');
    info.tooltip({
        animation: false,
        trigger: 'manual'
    });
    function initMap() {
        map = new ol.Map({
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                }),
                vectorLayer
            ],
            target: 'map',
            view: new ol.View({
                center: [124.50806, 8.00593],
                zoom: 8,
                maxZoom: 19,
                minZoom: 7,
                projection: 'EPSG:4326'
            })
        });
        map.on('singleclick', function (evt) {

            var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
                return feature
            });
            if (feature) {
                var station_name = feature.get('proper_name');
                var mun = feature.get('municipality');
                var prov = feature.get('province');
                var data = feature.get('data');
                get_station(station_name, mun, prov, data);

            }
        })
        var target = $(map.getTargetElement());
        map.on('pointermove', function (evt) {
            map.hasFeatureAtPixel(evt.pixel) === true ? target.css('cursor', 'pointer') : target.css('cursor', 'move');
            if (evt.dragging) {
                info.tooltip('hide');
                return;
            }
            displayFeatureInfo(map.getEventPixel(evt.originalEvent));
        });
        InsertToCanvas.postcompose();

    }

    return {
        'init': initMap,
        'plotStation': plotARGs,
        'colorize': colorize,
        'showGraph': get_station,
        'rainStations': stationNames,
        'zoomMe': filterRainfall,
        'resetView': resetView
    }
})()

rainfall.init();
rainfall.colorize();
setInterval(function () {
    rainfall.colorize();
}, 900000);

$(window).load(function () {
    $("#rain_gauge").typeahead({
        source: rainfall.rainStations()
    });

    document.getElementById("frmSearch").addEventListener("submit", function (event) {
        event.preventDefault();
        var gauge = document.getElementById("rain_gauge").value;
        rainfall.zoomMe(gauge);
    }, false);

    document.getElementById("reset").addEventListener("click", function () {
        rainfall.resetView()
    });

});
