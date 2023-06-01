class apiTest {
    testApiVersion = JSON.parse('{"APIVersion":1,"BaseURL":"/solar_api/v1/","CompatibilityRange":"1.5-9"}');
    testInverterRealtimeDataCommon = JSON.parse(
        '{"Body":{"Data":{"DAY_ENERGY":{"Unit":"Wh","Value":1393.2},"DeviceStatus":{"ErrorCode":0,"LEDColor":2,"LEDState":0,"MgmtTimerRemainingTime":-1,"StateToReset":false,"StatusCode":7},"FAC":{"Unit":"Hz","Value":49.97},"IAC":{"Unit":"A","Value":0.36},"IDC":{"Unit":"A","Value":0.32},"PAC":{"Unit":"W","Value":84},"TOTAL_ENERGY":{"Unit":"Wh","Value":1734796.12},"UAC":{"Unit":"V","Value":232.4},"UDC":{"Unit":"V","Value":399.9},"YEAR_ENERGY":{"Unit":"Wh","Value":322593.5}}},"Head":{"RequestArguments":{"DataCollection":"CommonInverterData","DeviceClass":"Inverter","DeviceId":"1","Scope":"Device"},"Status":{"Code":0,"Reason":"","UserMessage":""},"Timestamp":"2019-06-12T15:31:03+02:00"}}',
    );
    testInverterRealtimeDataCommonGen24 = JSON.parse(
        '{"Body":{"Data":{"DeviceStatus":{"InverterState":"Running"},"FAC":{"Unit":"Hz","Value":49.974002838134766},"IAC":{"Unit":"A","Value":1.5640000402927399},"IAC_L1":{"Unit":"A","Value":0.3880000114440918},"IAC_L2":{"Unit":"A","Value":0.38600000739097595},"IAC_L3":{"Unit":"A","Value":0.39500001072883606},"IDC":{"Unit":"A","Value":0.6641354560852051},"PAC":{"Unit":"W","Value":270},"SAC":{"Unit":"VA","Value":274},"UAC":{"Unit":"V","Value":234.6000010172526},"UAC_L1":{"Unit":"V","Value":233.1999969482422},"UAC_L2":{"Unit":"V","Value":234.5},"UDC":{"Unit":"V","Value":449.9998779296875},"UDC_3":{"Unit":"V","Value":409.69140625}}},"Head":{"RequestArguments":{"DataCollection":"CommonInverterData","DeviceClass":"Inverter","DeviceId":"1","Scope":"Device"},"Status":{"Code":0,"Reason":"","UserMessage":""},"Timestamp":"2019-08-28T05:52:49+00:00"}}',
    );
    testInverterRealtimeData3Phase = JSON.parse(
        '{"Body":{"Data":{"IAC_L1":{"Unit":"A","Value":0.08},"IAC_L2":{"Unit":"A","Value":0.04},"IAC_L3":{"Unit":"A","Value":0.08},"UAC_L1":{"Unit":"V","Value":233.9},"UAC_L2":{"Unit":"V","Value":233},"UAC_L3":{"Unit":"V","Value":230.7}}},"Head":{"RequestArguments":{"DataCollection":"3PInverterData","DeviceClass":"Inverter","DeviceId":"1","Scope":"Device"},"Status":{"Code":0,"Reason":"","UserMessage":""},"Timestamp":"2021-05-19T09:49:39+02:00"}}',
    );
    testInverterRealtimeData3PhaseGen24 = JSON.parse(
        '{"Body":{"Data":{"IAC_L1":{"Unit":"A","Value":0.39000001549720764},"IAC_L2":{"Unit":"A","Value":0.3890000283718109},"IAC_L3":{"Unit":"A","Value":0.3970000147819519},"UAC_L1":{"Unit":"V","Value":233.10000610351562},"UAC_L2":{"Unit":"V","Value":234.5},"UAC_L3":{"Unit":"V","Value":230.71844482421875}}},"Head":{"RequestArguments":{"DataCollection":"3PInverterData","DeviceClass":"Inverter","DeviceId":"1","Scope":"Device"},"Status":{"Code":0,"Reason":"","UserMessage":""},"Timestamp":"2021-01-19T11:04:36+00:00"}}',
    );
    testInverterRealtimeDataCumGen24 = JSON.parse(
        '{"Body":{"Data":{"DeviceStatus":{"InverterState":"Running"},"PAC":{"Unit":"W","Value":8.429615468229442e+252}}},"Head":{"RequestArguments":{"DataCollection":"CumulationInverterData","DeviceClass":"Inverter","DeviceId":"1","Scope":"Device"},"Status":{"Code":0,"Reason":"","UserMessage":""},"Timestamp":"2019-08-28T05:59:13+00:00"}}',
    );
    testInverterRealtimeDataSystem = JSON.parse(
        '{"Body":{"Data":{"DAY_ENERGY":{"Unit":"Wh","Values":{"1":1393,"2":1618,"3":1695,"55":1698}},"PAC":{"Unit":"W","Values":{"1":84,"2":109,"3":109,"55":108}},"TOTAL_ENERGY":{"Unit":"Wh","Values":{"1":1734796,"2":3026782,"3":3160499,"55":3275219}},"YEAR_ENERGY":{"Unit":"Wh","Values":{"1":322593,"2":385172,"3":399904,"55":403993}}}},"Head":{"RequestArguments":{"DeviceClass":"Inverter","Scope":"System"},"Status":{"Code":0,"Reason":"","UserMessage":""},"Timestamp":"2019-06-12T15:31:04+02:00"}}',
    );
    testInverterRealtimeDataSystemGen24 = JSON.parse(
        '{"Body":{"Data":{"PAC":{"Unit":"W","Value":{"1":271}}}},"Head":{"RequestArguments":{"DeviceClass":"Inverter","Scope":"System"},"Status":{"Code":0,"Reason":"","UserMessage":""},"Timestamp":"2019-08-28T05:28:12+00:00"}}',
    );

    testSensorRealtimeDataNow = JSON.parse(
        '{"Body":{"Data":{"0":{"Unit":"\u00b0C","Value":-9},"1":{"Unit":"\u00b0C","Value":24},"2":{"Unit":"W/m2","Value":589},"4":{"Unit":"KWh/m2","Value":0}}},"Head":{"RequestArguments":{"DataCollection":"NowSensorData","DeviceClass":"SensorCard","DeviceId":"1","Scope":"Device"},"Status":{"Code":0,"Reason":"","UserMessage":""},"Timestamp":"2018-03-01T13:25:34+01:00"}}',
    );
    testSensorRealtimeDataMinMax = JSON.parse(
        '{"Body":{"Data":{"0":{"Day":{"Max":{"Unit":"\u00b0C","Value":66},"Min":{"Unit":"\u00b0C","Value":46}},"Month":{"Max":{"Unit":"\u00b0C","Value":85},"Min":{"Unit":"\u00b0C","Value":0}},"SensorActive":true,"Total":{"Max":{"Unit":"\u00b0C","Value":85},"Min":{"Unit":"\u00b0C","Value":-35}},"Year":{"Max":{"Unit":"\u00b0C","Value":85},"Min":{"Unit":"\u00b0C","Value":0}}},"1":{"Day":{"Max":{"Unit":"\u00b0C","Value":27},"Min":{"Unit":"\u00b0C","Value":27}},"Month":{"Max":{"Unit":"\u00b0C","Value":77},"Min":{"Unit":"\u00b0C","Value":27}},"SensorActive":true,"Total":{"Max":{"Unit":"\u00b0C","Value":187},"Min":{"Unit":"\u00b0C","Value":-35}},"Year":{"Max":{"Unit":"\u00b0C","Value":77},"Min":{"Unit":"\u00b0C","Value":27}}},"2":{"Day":{"Max":{"Unit":"W/m2","Value":0}},"Month":{"Max":{"Unit":"W/m2","Value":159}},"SensorActive":true,"Total":{"Max":{"Unit":"W/m2","Value":10036}},"Year":{"Max":{"Unit":"W/m2","Value":159}}},"3":{"Day":{"Max":{"Unit":"Hz","Value":0}},"Month":{"Max":{"Unit":"Hz","Value":0}},"SensorActive":false,"Total":{"Max":{"Unit":"Hz","Value":2975}},"Year":{"Max":{"Unit":"Hz","Value":0}}},"4":{"Day":{"Max":{"Unit":"Hz","Value":0}},"Month":{"Max":{"Unit":"Hz","Value":0}},"SensorActive":false,"Total":{"Max":{"Unit":"Hz","Value":2982}},"Year":{"Max":{"Unit":"Hz","Value":0}}},"5":{"Day":{"Max":{"Unit":"A","Value":0}},"Month":{"Max":{"Unit":"A","Value":0}},"SensorActive":true,"Total":{"Max":{"Unit":"A","Value":36934}},"Year":{"Max":{"Unit":"A","Value":0}}}}},"Head":{"RequestArguments":{"DataCollection":"MinMaxSensorData","DeviceClass":"SensorCard","DeviceId":"1","Scope":"Device"},"Status":{"Code":0,"Reason":"","UserMessage":""},"Timestamp":"2018-03-01T13:25:34+01:00"}}',
    );

    testStringRealtimeDataCurrentSumDay = JSON.parse(
        '{"Body":{"Data":{"1":{"Unit":"Ah","Value":0},"2":{"Unit":"Ah","Value":0},"3":{"Unit":"Ah","Value":0},"4":{"Unit":"Ah","Value":0},"5":{"Unit":"Ah","Value":0}}},"Head":{"RequestArguments":{"DataCollection":"CurrentSumStringControlData","DeviceClass":"StringControl","DeviceId":"8","Scope":"Device","TimePeriod":"Day"},"Status":{"Code":0,"Reason":"","UserMessage":""},"Timestamp":"2019-06-13T15:06:54+02:00"}}',
    );
    testStringRealtimeDataNow = JSON.parse(
        '{"Body":{"Data":{"1":{"Unit":"A","Value":0},"2":{"Unit":"A","Value":0},"3":{"Unit":"A","Value":0},"4":{"Unit":"A","Value":0},"5":{"Unit":"A","Value":0}}},"Head":{"RequestArguments":{"DataCollection":"NowStringControlData","DeviceClass":"StringControl","DeviceId":"8","Scope":"Device"},"Status":{"Code":0,"Reason":"","UserMessage":""},"Timestamp":"2019-06-13T15:06:57+02:00"}}',
    );
    testStringRealtimeDataNowGen24 = JSON.parse(
        '{"Body":{"Data":{}},"Head":{"RequestArguments":{"DataCollection":"NowStringControlData","DeviceClass":"StringControl","Scope":"System"},"Status":{"Code":0,"Reason":"","UserMessage":""},"Timestamp":"2019-08-28T07:20:58+00:00"}}',
    );
    testStringRealtimeDataLastError = JSON.parse(
        '{"Body":{"Data":{"Channels":{"1":{"Deviation":{"Unit":"%","Value":5.7},"Sum":{"Unit":"Ah","Value":0.85}},"2":{"Deviation":{"Unit":"%","Value":-12.6},"Sum":{"Unit":"Ah","Value":0.7}},"3":{"Deviation":{"Unit":"%","Value":7.1},"Sum":{"Unit":"Ah","Value":0.86}},"4":{"Deviation":{"Unit":"%","Value":0},"Sum":{"Unit":"Ah","Value":0}},"5":{"Deviation":{"Unit":"%","Value":0},"Sum":{"Unit":"Ah","Value":0}}},"StringAverage":{"Unit":"Ah","Value":0.81},"TimeOfError":"2010-10-23T09:32:00+02:00"}},"Head":{"RequestArguments":{"DataCollection":"LastErrorStringControlData","DeviceClass":"StringControl","DeviceId":"8","Scope":"Device"},"Status":{"Code":0,"Reason":"","UserMessage":""},"Timestamp":"2019-06-13T15:06:56+02:00"}}',
    );

    testLoggerInfo = JSON.parse(
        '{"Body":{"LoggerInfo":{"CO2Factor":0.5299999713897705,"CO2Unit":"kg","CashCurrency":"EUR","CashFactor":0.11999999731779099,"DefaultLanguage":"en","DeliveryFactor":0.25,"HWVersion":"2.4D","PlatformID":"wilma","ProductID":"fronius -datamanager -card","SWVersion":"3.14.1-2","TimezoneLocation":"Paris","TimezoneName":"CEST","UTCOffset":7200,"UniqueID":"240.107620"}},"Head":{"RequestArguments":{},"Status":{"Code":0,"Reason":"","UserMessage":""},"Timestamp":"2019-06-12T15:31:06+02:00"}}',
    );
    testLoggerLedInfo = JSON.parse(
        '{"Body":{"Data":{"PowerLED":{"Color":"green","State":"on"},"SolarNetLED":{"Color":"green","State":"on"},"SolarWebLED":{"Color":"green","State":"on"},"WLANLED":{"Color":"red","State":"on"}}},"Head":{"RequestArguments":{},"Status":{"Code":0,"Reason":"","UserMessage":""},"Timestamp":"2019-06-12T15:31:07+02:00"}}',
    );

    testInverterInfo = JSON.parse(
        '{"Body":{"Data":{"1":{"CustomName":"Primo 8.2-1 (","DT":102,"ErrorCode":0,"PVPower":500,"Show":1,"StatusCode":7,"UniqueID":"38183"},"2":{"CustomName":"Primo 5.0-1 20","DT":86,"ErrorCode":0,"PVPower":500,"Show":1,"StatusCode":7,"UniqueID":"16777215"},"3":{"CustomName":"Galvo 3.1-1 20","DT":106,"ErrorCode":0,"PVPower":500,"Show":1,"StatusCode":7,"UniqueID":"7262"},"55":{"CustomName":"Galvo 3.0-1 (5","DT":224,"ErrorCode":0,"PVPower":500,"Show":1,"StatusCode":7,"UniqueID":"100372"}}},"Head":{"RequestArguments":{},"Status":{"Code":0,"Reason":"","UserMessage":""},"Timestamp":"2019-06-12T15:31:02+02:00"}}',
    );
    testInverterInfoGen24 = JSON.parse(
        '{"Body":{"Data":{"1":{"CustomName":"tr-3pn -01","DT":1,"PVPower":0,"Show":1,"StatusCode":"Running","UniqueID":"29301000987160033"}}},"Head":{"RequestArguments":{},"Status":{"Code":0,"Reason":"","UserMessage":""},"Timestamp":"2019-08-28T07:47:43+00:00"}}',
    );

    testActiveDeviceInfoInverter = JSON.parse(
        '{"Body":{"Data":{"1":{"DT":102,"Serial":"27135399"},"2":{"DT":86},"3":{"DT":106},"55":{"DT":224}}},"Head":{"RequestArguments":{"DeviceClass":"Inverter"},"Status":{"Code":0,"Reason":"","UserMessage":""},"Timestamp":"2019-06-12T15:30:57+02:00"}}',
    );
    testActiveDeviceInfoInverterGen24 = JSON.parse(
        '{"Body":{"Data":{"1":{"DT":1,"Serial":"29091000975090007"}}},"Head":{"RequestArguments":{"DeviceClass":"Inverter"},"Status":{"Code":0,"Reason":"","UserMessage":""},"Timestamp":"2019-08-28T09:02:48+00:00"}}',
    );
    testActiveDeviceInfoSensor = JSON.parse(
        '{"Body":{"Data":{"1":{"ChannelNames":["Temperature\u24231","Temperature\u24232","Irradiation","Digital\u24231","Digital\u24232","Current"],"DT":254},"2":{"ChannelNames":["Temperature\u24231","Temperature\u24232","Irradiation","Digital\u24231","Digital\u24232","Current"],"DT":254}}},"Head":{"RequestArguments":{"DeviceClass":"SensorCard"},"Status":{"Code":0,"Reason":"","UserMessage":""},"Timestamp":"2018-03-01T14:41:12+01:00"}}',
    );

    testActiveDeviceInfoSystem = JSON.parse(
        '{"Body":{"Data":{"Inverter":{"1":{"DT":102,"Serial":"27135399"},"2":{"DT":86},"3":{"DT":106},"55":{"DT":224}},"Meter":{"0":{"DT":-1,"Serial":"16420055"},"2":{"DT":-1,"Serial":"475619"},"3":{"DT":-1,"Serial":"17362721"}},"Ohmpilot":{"0":{"DT":-1,"Serial":"12345678"}},"SensorCard":{"1":{"ChannelNames":["Temperature\u24231","Temperature\u24232","Irradiation","Digital\u24231","Digital\u24232","Current"],"DT":254}},"Storage":{},"StringControl":{"3":{"DT":253}}}},"Head":{"RequestArguments":{"DeviceClass":"System"},"Status":{"Code":0,"Reason":"","UserMessage":""},"Timestamp":"2019-06-12T15:30:59+02:00"}}',
    );
    testActiveDeviceInfoSystemHybrid = JSON.parse(
        '{"Body":{"Data":{"Inverter":{"1":{"DT":99}},"Meter":{"0":{"DT":-1,"Serial":"16250161"}},"Ohmpilot":{},"SensorCard":{},"Storage":{"0":{"DT":-1,"Serial":"26175063"}},"StringControl":{}}},"Head":{"RequestArguments":{"DeviceClass":"System"},"Status":{"Code":0,"Reason":"","UserMessage":""},"Timestamp":"2019-06-12T15:30:59+02:00"}}',
    );
    testActiveDeviceInfoSystemGen24 = JSON.parse(
        '{"Body":{"Data":{"1":{"DT":1,"Serial":"29091000975090007"},"Meter":{"0":{"DT":-1,"Serial":"18142251"}},"Ohmpilot":{"0":{"DT":-1,"Serial":"28136344"}},"Storage":{}}},"Head":{"RequestArguments":{"DeviceClass":"System"},"Status":{"Code":0,"Reason":"","UserMessage":""},"Timestamp":"2019-08-28T08:59:41+00:00"}}',
    );

    testMeterRealtimeDataSystem = JSON.parse(
        '{"Body":{"Data":{"0":{"Current_AC_Phase_1":0.742,"Current_AC_Phase_2":0.632,"Current_AC_Phase_3":0.654,"Details":{"Manufacturer":"Fronius","Model":"Smart\u2423Meter\u242363A","Serial":"15160189"},"Enable":1,"EnergyReactive_VArAC_Sum_Consumed":9156420,"EnergyReactive_VArAC_Sum_Produced":87894450,"EnergyReal_WAC_Minus_Absolute":1642802,"EnergyReal_WAC_Plus_Absolute":19838697,"EnergyReal_WAC_Sum_Consumed":19838697,"EnergyReal_WAC_Sum_Produced":1642802,"Frequency_Phase_Average":50,"Meter_Location_Current":0,"PowerApparent_S_Phase_1":172.3666,"PowerApparent_S_Phase_2":147.0032,"PowerApparent_S_Phase_3":152.5782,"PowerApparent_S_Sum":31,"PowerFactor_Phase_1":0,"PowerFactor_Phase_2":0.98,"PowerFactor_Phase_3":1,"PowerFactor_Sum":0.82,"PowerReactive_Q_Phase_1":12.55,"PowerReactive_Q_Phase_2":5.81,"PowerReactive_Q_Phase_3":0,"PowerReactive_Q_Sum":18.36,"PowerReal_P_Phase_1":0,"PowerReal_P_Phase_2":-40.56,"PowerReal_P_Phase_3":15.03,"PowerReal_P_Sum":-25.53,"TimeStamp":1561364909,"Visible":1,"Voltage_AC_PhaseToPhase_12":402.6,"Voltage_AC_PhaseToPhase_23":403.5,"Voltage_AC_PhaseToPhase_31":403.2,"Voltage_AC_Phase_1":232.3,"Voltage_AC_Phase_2":232.6,"Voltage_AC_Phase_3":233.3},"1":{"Current_AC_Phase_1":-0.5831044912338257,"Current_AC_Phase_2":-0.678548276424408,"Current_AC_Phase_3":-0.7008516788482666,"Current_AC_Sum":-1.9625044465065002,"Details":{"Manufacturer":"Fronius","Model":"CCS\u2423WattNode\u2423WNC -3D-480-MB","Serial":"186477"},"Enable":1,"EnergyReal_WAC_Minus_Absolute":7336854,"EnergyReal_WAC_Phase_1_Consumed":1320806,"EnergyReal_WAC_Phase_1_Produced":1933071,"EnergyReal_WAC_Phase_2_Consumed":158238,"EnergyReal_WAC_Phase_2_Produced":3043466,"EnergyReal_WAC_Phase_3_Consumed":179872,"EnergyReal_WAC_Phase_3_Produced":2912264,"EnergyReal_WAC_Plus_Absolute":1106969,"EnergyReal_WAC_Sum_Consumed":1106969,"EnergyReal_WAC_Sum_Produced":7336854,"Frequency_Phase_Average":50.116844177246094,"Meter_Location_Current":256,"PowerApparent_S_Phase_1":135.04127502441406,"PowerApparent_S_Phase_2":160.43267822265625,"PowerApparent_S_Phase_3":163.0422821044922,"PowerApparent_S_Sum":458.5162353515625,"PowerFactor_Phase_1":1,"PowerFactor_Phase_2":1,"PowerFactor_Phase_3":1,"PowerFactor_Sum":1,"PowerReactive_Q_Phase_1":0,"PowerReactive_Q_Phase_2":0,"PowerReactive_Q_Phase_3":0,"PowerReactive_Q_Sum":0,"PowerReal_P_Phase_1":-135.04127502441406,"PowerReal_P_Phase_2":-160.43267822265625,"PowerReal_P_Phase_3":-163.0422821044922,"PowerReal_P_Sum":-458.5162353515625,"TimeStamp":1561364987,"Visible":1,"Voltage_AC_PhaseToPhase_12":405.3290710449219,"Voltage_AC_PhaseToPhase_23":406.2306823730469,"Voltage_AC_PhaseToPhase_31":402.03070068359375,"Voltage_AC_Phase_1":231.59017944335938,"Voltage_AC_Phase_2":236.43516540527344,"Voltage_AC_Phase_3":232.63450622558594,"Voltage_AC_Phase_Average":233.55328369140625},"2":{"Current_AC_Phase_1":0.579,"Current_AC_Sum":0.579,"Details":{"Manufacturer":"Fronius","Model":"Smart\u2423Meter\u242363A-1","Serial":"15160009"},"Enable":1,"EnergyReactive_VArAC_Phase_1_Consumed":260,"EnergyReactive_VArAC_Phase_1_Produced":8261790,"EnergyReactive_VArAC_Sum_Consumed":260,"EnergyReactive_VArAC_Sum_Produced":8261790,"EnergyReal_WAC_Minus_Absolute":0,"EnergyReal_WAC_Phase_1_Consumed":5670793,"EnergyReal_WAC_Phase_1_Produced":0,"EnergyReal_WAC_Plus_Absolute":5670793,"EnergyReal_WAC_Sum_Consumed":5670793,"EnergyReal_WAC_Sum_Produced":0,"Frequency_Phase_Average":50,"Meter_Location_Current":257,"PowerApparent_S_Phase_1":135.19,"PowerApparent_S_Sum":135.19,"PowerFactor_Phase_1":0.97,"PowerFactor_Sum":0.97,"PowerReactive_Q_Phase_1":-22.63,"PowerReactive_Q_Sum":-22.63,"PowerReal_P_Phase_1":132.1,"PowerReal_P_Sum":132.1,"TimeStamp":1561365038,"Visible":1,"Voltage_AC_Phase_1":233.5},"3":{"Details":{"Manufacturer":"Fronius","Model":"S0\u2423Meter\u2423at\u2423inverter\u242340","Serial":"n.a."},"Enable":1,"Meter_Location_Current":258,"TimeStamp":1560942897,"EnergyReal_WAC_Minus_Relative":0,"EnergyReal_WAC_Plus_Relative":0,"PowerReal_P_Sum":0,"Visible":1},"4":{"Current_AC_Phase_1":0,"Current_AC_Phase_2":0,"Current_AC_Phase_3":0,"Current_AC_Sum":0,"Details":{"Manufacturer":"Fronius","Model":"CCS\u2423WattNode\u2423WND -3Y-600-MB","Serial":"475619"},"Enable":1,"EnergyReal_WAC_Minus_Absolute":3321,"EnergyReal_WAC_Phase_1_Consumed":3321,"EnergyReal_WAC_Phase_1_Produced":10996,"EnergyReal_WAC_Phase_2_Consumed":0,"EnergyReal_WAC_Phase_2_Produced":0,"EnergyReal_WAC_Phase_3_Consumed":0,"EnergyReal_WAC_Phase_3_Produced":14,"EnergyReal_WAC_Plus_Absolute":11010,"EnergyReal_WAC_Sum_Consumed":3321,"EnergyReal_WAC_Sum_Produced":11010,"Frequency_Phase_Average":49.9833869934082,"Meter_Location_Current":259,"PowerApparent_S_Phase_1":0,"PowerApparent_S_Phase_2":0,"PowerApparent_S_Phase_3":0,"PowerApparent_S_Sum":0,"PowerFactor_Phase_1":1,"PowerFactor_Phase_2":1,"PowerFactor_Phase_3":1,"PowerFactor_Sum":1,"PowerReactive_Q_Phase_1":0,"PowerReactive_Q_Phase_2":0,"PowerReactive_Q_Phase_3":0,"PowerReactive_Q_Sum":0,"PowerReal_P_Phase_1":0,"PowerReal_P_Phase_2":0,"PowerReal_P_Phase_3":0,"PowerReal_P_Sum":0,"TimeStamp":1519911921,"Visible":1,"Voltage_AC_PhaseToPhase_12":238.15383911132812,"Voltage_AC_PhaseToPhase_23":0,"Voltage_AC_PhaseToPhase_31":232.91676330566406,"Voltage_AC_Phase_1":404.52679443359375,"Voltage_AC_Phase_2":231.70884704589844,"Voltage_AC_Phase_3":232.72479248046875,"Voltage_AC_Phase_Average":289.6534729003906},"5":{"Current_AC_Phase_1":0,"Current_AC_Phase_2":0,"Current_AC_Phase_3":0,"Details":{"Manufacturer":"Fronius","Model":"Smart\u2423Meter\u242350kA-3","Serial":"17362721"},"Enable":1,"EnergyReactive_VArAC_Sum_Consumed":34,"EnergyReactive_VArAC_Sum_Produced":174,"EnergyReal_WAC_Minus_Absolute":3940,"EnergyReal_WAC_Plus_Absolute":434,"EnergyReal_WAC_Sum_Consumed":3940,"EnergyReal_WAC_Sum_Produced":434,"Frequency_Phase_Average":49.900000743567944,"Meter_Location_Current":3,"PowerApparent_S_Phase_1":0,"PowerApparent_S_Phase_2":0,"PowerApparent_S_Phase_3":0,"PowerApparent_S_Sum":0,"PowerFactor_Phase_1":0.9999999776482582,"PowerFactor_Phase_2":0.9999999776482582,"PowerFactor_Phase_3":0.9999999776482582,"PowerFactor_Sum":0.9999999776482582,"PowerReactive_Q_Phase_1":0,"PowerReactive_Q_Phase_2":0,"PowerReactive_Q_Phase_3":0,"PowerReactive_Q_Sum":0,"PowerReal_P_Phase_1":0,"PowerReal_P_Phase_2":0,"PowerReal_P_Phase_3":0,"PowerReal_P_Sum":0,"TimeStamp":1519911921,"Visible":1,"Voltage_AC_PhaseToPhase_12":404.90001923171803,"Voltage_AC_PhaseToPhase_23":404.50001921271905,"Voltage_AC_PhaseToPhase_31":404.4000192079693,"Voltage_AC_Phase_1":233.70001110015437,"Voltage_AC_Phase_2":233.80001110490412,"Voltage_AC_Phase_3":233.3000110811554}}},"Head":{"RequestArguments":{"DeviceClass":"Meter","Scope":"System"},"Status":{"Code":0,"Reason":"","UserMessage":""},"Timestamp":"2019-06-24T10:31:54+02:00"}}',
    );
    testMeterRealtimeDataDevice = JSON.parse(
        '{"Body":{"Data":{"Current_AC_Phase_1":0.619,"Current_AC_Phase_2":0.688,"Current_AC_Phase_3":0.551,"Details":{"Manufacturer":"Fronius","Model":"Smart\u2423Meter\u242363A","Serial":"15480258"},"Enable":1,"EnergyReactive_VArAC_Sum_Consumed":2183700,"EnergyReactive_VArAC_Sum_Produced":47100,"EnergyReal_WAC_Minus_Absolute":4075753,"EnergyReal_WAC_Plus_Absolute":941840,"EnergyReal_WAC_Sum_Consumed":941840,"EnergyReal_WAC_Sum_Produced":4075753,"Frequency_Phase_Average":50,"Meter_Location_Current":0,"PowerApparent_S_Phase_1":143.9794,"PowerApparent_S_Phase_2":159.5472,"PowerApparent_S_Phase_3":127.44630000000002,"PowerApparent_S_Sum":211.36,"PowerFactor_Phase_1":0.98,"PowerFactor_Phase_2":1,"PowerFactor_Phase_3":1,"PowerFactor_Sum":1,"PowerReactive_Q_Phase_1":9.9,"PowerReactive_Q_Phase_2":0,"PowerReactive_Q_Phase_3":4.8,"PowerReactive_Q_Sum":14.7,"PowerReal_P_Phase_1":-75,"PowerReal_P_Phase_2":-74.28,"PowerReal_P_Phase_3":-62.08,"PowerReal_P_Sum":-211.36,"TimeStamp":1560430330,"Visible":1,"Voltage_AC_PhaseToPhase_12":402.3,"Voltage_AC_PhaseToPhase_23":401.1,"Voltage_AC_PhaseToPhase_31":401.7,"Voltage_AC_Phase_1":232.6,"Voltage_AC_Phase_2":231.9,"Voltage_AC_Phase_3":231.3}},"Head":{"RequestArguments":{"DeviceClass":"Meter","DeviceId":"0","Scope":"Device"},"Status":{"Code":0,"Reason":"","UserMessage":""},"Timestamp":"2019-06-13T14:52:10+02:00"}}',
    );

    testStorageRealtimeDataSolarBattery = JSON.parse(
        '{"Body":{"Data":{"0":{"Controller":{"Capacity_Maximum":7200,"Current_DC":1.12,"DesignedCapacity":7200,"Details":{"Manufacturer":"Fronius","Model":"Fronius\u2423Solar\u2423Battery","Serial":"26175063"},"Enable":1,"StateOfCharge_Relative":55,"Temperature_Cell":26.150000000000034,"TimeStamp":1560346272,"Voltage_DC":318.8,"Voltage_DC_Maximum_Cell":3.329,"Voltage_DC_Minimum_Cell":3.316},"Modules":[{"Capacity_Maximum":1200,"Current_DC":1.11,"CycleCount_BatteryCell":255,"DesignedCapacity":1200,"Details":{"Manufacturer":"Sony","Model":"unknown","Serial":"S012002885\u2423"},"Enable":1,"StateOfCharge_Relative":55,"Status_BatteryCell":53,"Temperature_Cell":27.25,"Temperature_Cell_Maximum":27.75,"Temperature_Cell_Minimum":26.950000000000045,"TimeStamp":1560346263,"Voltage_DC":53.142,"Voltage_DC_Maximum_Cell":3.324,"Voltage_DC_Minimum_Cell":3.314},{"Capacity_Maximum":1200,"Current_DC":1.12,"CycleCount_BatteryCell":257,"DesignedCapacity":1200,"Details":{"Manufacturer":"Sony","Model":"unknown","Serial":"S012002843\u2423"},"Enable":1,"StateOfCharge_Relative":55,"Status_BatteryCell":53,"Temperature_Cell":26.650000000000034,"Temperature_Cell_Maximum":27.150000000000034,"Temperature_Cell_Minimum":26.350000000000023,"TimeStamp":1560346263,"Voltage_DC":53.137,"Voltage_DC_Maximum_Cell":3.328,"Voltage_DC_Minimum_Cell":3.316},{"Capacity_Maximum":1200,"Current_DC":1.13,"CycleCount_BatteryCell":257,"DesignedCapacity":1200,"Details":{"Manufacturer":"Sony","Model":"unknown","Serial":"S012002844\u2423"},"Enable":1,"StateOfCharge_Relative":55,"Status_BatteryCell":53,"Temperature_Cell":26.450000000000045,"Temperature_Cell_Maximum":27.05000000000001,"Temperature_Cell_Minimum":26.25,"TimeStamp":1560346263,"Voltage_DC":53.164,"Voltage_DC_Maximum_Cell":3.329,"Voltage_DC_Minimum_Cell":3.319},{"Capacity_Maximum":1200,"Current_DC":1.13,"CycleCount_BatteryCell":254,"DesignedCapacity":1200,"Details":{"Manufacturer":"Sony","Model":"unknown","Serial":"S012002838\u2423"},"Enable":1,"StateOfCharge_Relative":55,"Status_BatteryCell":53,"Temperature_Cell":26.150000000000034,"Temperature_Cell_Maximum":26.75,"Temperature_Cell_Minimum":25.75,"TimeStamp":1560346263,"Voltage_DC":53.159,"Voltage_DC_Maximum_Cell":3.329,"Voltage_DC_Minimum_Cell":3.318},{"Capacity_Maximum":1200,"Current_DC":1.12,"CycleCount_BatteryCell":256,"DesignedCapacity":1200,"Details":{"Manufacturer":"Sony","Model":"unknown","Serial":"S012002884\u2423"},"Enable":1,"StateOfCharge_Relative":55,"Status_BatteryCell":53,"Temperature_Cell":25.55000000000001,"Temperature_Cell_Maximum":26.150000000000034,"Temperature_Cell_Minimum":25.350000000000023,"TimeStamp":1560346263,"Voltage_DC":53.146,"Voltage_DC_Maximum_Cell":3.326,"Voltage_DC_Minimum_Cell":3.317},{"Capacity_Maximum":1200,"Current_DC":1.12,"CycleCount_BatteryCell":255,"DesignedCapacity":1200,"Details":{"Manufacturer":"Sony","Model":"unknown","Serial":"S012002857\u2423"},"Enable":1,"StateOfCharge_Relative":55,"Status_BatteryCell":53,"Temperature_Cell":25.25,"Temperature_Cell_Maximum":25.75,"Temperature_Cell_Minimum":24.950000000000045,"TimeStamp":1560346263,"Voltage_DC":53.157,"Voltage_DC_Maximum_Cell":3.326,"Voltage_DC_Minimum_Cell":3.32}]}}},"Head":{"RequestArguments":{"DeviceClass":"Storage","Scope":"System"},"Status":{"Code":0,"Reason":"","UserMessage":""},"Timestamp":"2019-06-12T15:31:12+02:00"}}',
    );
    testStorageRealtimeDataBydBbox = JSON.parse(
        '{"Body":{"Data":{"0":{"Controller":{"Capacity_Maximum":11520,"Current_DC":0,"DesignedCapacity":11520,"Details":{"Manufacturer":"BYD","Model":"BYD\u2423Battery -Box\u2423HV","Serial":"400481708-00059"},"Enable":1,"StateOfCharge_Relative":4.7,"Status_BatteryCell":3,"Temperature_Cell":23.95,"TimeStamp":1560430543,"Voltage_DC":462.6},"Modules":[]}}},"Head":{"RequestArguments":{"DeviceClass":"Storage","Scope":"System"},"Status":{"Code":0,"Reason":"","UserMessage":""},"Timestamp":"2019-06-13T14:55:44+02:00"}}',
    );
    testStorageRealtimeDataLgChem = JSON.parse(
        '{"Body":{"Data":{"Controller":{"Capacity_Maximum":9800,"Current_DC":0.9,"DesignedCapacity":9800,"Details":{"Manufacturer":"LG-Chem","Model":"Resu\u2423H","Serial":"1706179036"},"Enable":1,"StateOfCharge_Relative":56,"Status_BatteryCell":3,"Temperature_Cell":27.55,"TimeStamp":1560346267,"Voltage_DC":407.5},"Modules":[]}},"Head":{"RequestArguments":{"DeviceClass":"Storage","DeviceId":"0","Scope":"Device"},"Status":{"Code":0,"Reason":"","UserMessage":""},"Timestamp":"2019-06-12T15:31:08+02:00"}}',
    );

    testOhmpilotRealtimeDataSystem = JSON.parse(
        '{"Body":{"Data":{"0":{"CodeOfError":926,"CodeOfState":0,"Details":{"Hardware":"3","Manufacturer":"Fronius","Model":"Ohmpilot","Serial":"28136344","Software":"1.0.19-1"},"EnergyReal_WAC_Sum_Consumed":2964307,"PowerReal_PAC_Sum":0,"Temperature_Channel_1":23.9}}},"Head":{"RequestArguments":{"DeviceClass":"OhmPilot","Scope":"System"},"Status":{"Code":0,"Reason":"","UserMessage":""},"Timestamp":"2019-06-24T10:10:44+02:00"}}',
    );
    testOhmpilotRealtimeDataDevice = JSON.parse(
        '{"Body":{"Data":{"CodeOfError":926,"CodeOfState":0,"Details":{"Hardware":"3","Manufacturer":"Fronius","Model":"Ohmpilot","Serial":"28136344","Software":"1.0.19-1"},"EnergyReal_WAC_Sum_Consumed":2964307,"PowerReal_PAC_Sum":0,"Temperature_Channel_1":23.9}},"Head":{"RequestArguments":{"DeviceClass":"OhmPilot","DeviceId":"0","Scope":"Device"},"Status":{"Code":0,"Reason":"","UserMessage":""},"Timestamp":"2019-06-24T10:10:41+02:00"}}',
    );

    testPowerflowRealtimeDataHybrid = JSON.parse(
        '{"Body":{"Data":{"Inverters":{"1":{"Battery_Mode":"normal","DT":99,"E_Day":6758,"E_Total":7604385.5,"E_Year":1342638.25,"P":506,"SOC":55}},"Site":{"BatteryStandby":false,"E_Day":6758,"E_Total":7604385.5,"E_Year":1342638.2000000002,"Meter_Location":"grid","Mode":"bidirectional","P_Akku":-384.70000000000005,"P_Grid":-511.99,"P_Load":5.990000000000009,"P_PV":941.6,"rel_Autonomy":100,"rel_SelfConsumption":0},"Smartloads":{"Ohmpilots":{"720897":{"P_AC_Total":2635,"State":"normal","Temperature":30.7}}},"Version":"12"}},"Head":{"RequestArguments":{},"Status":{"Code":0,"Reason":"","UserMessage":""},"Timestamp":"2019-06-12T15:31:07+02:00"}}',
    );
    testPowerflowRealtimeData = JSON.parse(
        '{"Body":{"Data":{"Inverters":{"1":{"DT":102,"E_Day":1393.2000732421875,"E_Total":1734796.125,"E_Year":322593.5,"P":88},"2":{"DT":86,"E_Day":1618.5,"E_Total":3026782,"E_Year":385172.09375,"P":104},"3":{"DT":106,"E_Day":1695.800048828125,"E_Total":3160499.75,"E_Year":399904.09375,"P":109},"55":{"DT":224,"E_Day":1699,"E_Total":3275219.75,"E_Year":403993.21875,"P":109}},"Site":{"E_Day":6406.5001220703125,"E_Total":11197297.625,"E_Year":1511662.90625,"Meter_Location":"unknown","Mode":"produce -only","P_Akku":null,"P_Grid":null,"P_Load":null,"P_PV":410,"rel_Autonomy":null,"rel_SelfConsumption":null},"Version":"12"}},"Head":{"RequestArguments":{},"Status":{"Code":0,"Reason":"","UserMessage":""},"Timestamp":"2019-06-12T15:31:08+02:00"}}',
    );
    testPowerflowRealtimeDataGen24 = JSON.parse(
        '{"Body":{"Data":{"Inverters":{"1":{"Battery_Mode":"normal","DT":1,"P":501,"SOC":30.600000381469727}},"Site":{"BatteryStandby":false,"E_Day":null,"E_Total":null,"E_Year":null,"Meter_Location":"grid","Mode":"bidirectional","P_Akku":-1006.1868286132812,"P_Grid":-497.62,"P_Load":-3.3799999999999955,"P_PV":1547.739990234375,"rel_Autonomy":100,"rel_SelfConsumption":0.6746506986027935},"Version":"12"}},"Head":{"RequestArguments":{},"Status":{"Code":0,"Reason":"","UserMessage":""},"Timestamp":"2019-08-28T09:43:29+00:00"}}',
    );
}
module.exports = new apiTest();
