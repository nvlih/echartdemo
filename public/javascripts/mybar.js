
require.config({
    paths: {
        'echarts': 'http://echarts.baidu.com/build/dist',
    }
});
function drewChart(a,b){
    // ʹ��
    require(
        [
            'echarts',
            'echarts/chart/line' // ʹ������ͼ�ͼ���lineģ�飬�������

        ],
        function (ec) {
            // ����׼���õ�dom����ʼ��echartsͼ��
            var myChart = ec.init(document.getElementById('main'));

            var options = {
                title : {
                    text: '��ȥһ��ÿ�����Ѷ�仯',
                },
                tooltip : {
                    trigger: 'axis'
                },



                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : b,
                    }
                ],
                yAxis : [
                    {
                        type : 'value',

                    }
                ],
                series : [
                    {
                        name:'������Ѷ�',
                        type:'line',
                        data:a,
                        markPoint : {
                            data : [
                                {type : 'max', name: '���ֵ'},
                                {type : 'min', name: '��Сֵ'}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name: 'ƽ��ֵ'}
                            ]
                        }
                    }
                ]
            };
            myChart.setOption(options);
        }
    );
}