
require.config({
    paths: {
        'echarts': 'http://echarts.baidu.com/build/dist',
    }
});
function drewChart(a,b){
    // 使用
    require(
        [
            'echarts',
            'echarts/chart/line' // 使用折线图就加载line模块，按需加载

        ],
        function (ec) {
            // 基于准备好的dom，初始化echarts图表
            var myChart = ec.init(document.getElementById('main'));

            var options = {
                title : {
                    text: '过去一周每天消费额变化',
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
                        name:'最大消费额',
                        type:'line',
                        data:a,
                        markPoint : {
                            data : [
                                {type : 'max', name: '最大值'},
                                {type : 'min', name: '最小值'}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name: '平均值'}
                            ]
                        }
                    }
                ]
            };
            myChart.setOption(options);
        }
    );
}