
$(function () {
    //初始化报表对象并指定其风格
    const treeChart = echarts.init(document.getElementById("treeChart"), 'shine');
    //虚拟数据
    const treeData1 = {
        name: '省份1',
        symbolSize: 10,
        itemStyle: { color: '#d4237a' },
        label: { fontSize: 14 },
        children: [
            {
                name: '董事会独立性',
                symbolSize: 8,
                itemStyle: { color: '#d4237a' },
                children: [
                    { name: '董事会总人数', itemStyle: { color: '#d4237a' } },
                    { name: '行业内董事会规模人数均值', itemStyle: { color: '#d4237a' } },
                    { name: '独立董事人数', itemStyle: { color: '#d4237a' } },
                    { name: '执行董事人数', itemStyle: { color: '#d4237a' } },
                    { name: '董事长是否兼任其他高管', itemStyle: { color: '#d4237a' } },
                    { name: '董事长是否来自大股东', itemStyle: { color: '#d4237a' } },
                    { name: '兼任经理层的董事人数', itemStyle: { color: '#d4237a' } },
                    { name: '是否含有党员董事', itemStyle: { color: '#d4237a' } }
                ]
            },
            {
                name: '董事会专业性',
                symbolSize: 8,
                itemStyle: { color: '#d4237a' },
                children: [
                    { name: '委员会主任是否独董担任', itemStyle: { color: '#d4237a' } },
                    { name: '专业独立董事人数', itemStyle: { color: '#d4237a' } },
                    { name: '董事变更时间', itemStyle: { color: '#d4237a' } },
                    { name: '战略决策委员会', itemStyle: { color: '#d4237a' } },
                    { name: '提名委员会', itemStyle: { color: '#d4237a' } },
                    { name: '薪酬委员会', itemStyle: { color: '#d4237a' } },
                    { name: '审计委员会', itemStyle: { color: '#d4237a' } }
                ]
            }
        ]
    };
    const treeData2 = {
        name: '省份2',
        symbolSize: 10,
        itemStyle: { color: '#e6b600' },
        label: { fontSize: 14 },
        children: [
            {
                name: '专门委员会会议',
                symbolSize: 8,
                itemStyle: { color: '#e6b600' },
                children: [
                    { name: '召开次数', itemStyle: { color: '#e6b600' } },
                    { name: '独董出席比率', itemStyle: { color: '#e6b600' } },
                    { name: '提交董事会议题数', itemStyle: { color: '#e6b600' } },
                    { name: '董事会采纳议题数', itemStyle: { color: '#e6b600' } }
                ]
            },
            {
                name: '董事会会议',
                symbolSize: 8,
                itemStyle: { color: '#e6b600' },
                children: [
                    { name: '召开次数', itemStyle: { color: '#e6b600' } },
                    { name: '通讯会议次数', itemStyle: { color: '#e6b600' } },
                    { name: '会议议题数', itemStyle: { color: '#e6b600' } },
                    { name: '表决反对票数', itemStyle: { color: '#e6b600' } },
                    { name: '独董出席比率', itemStyle: { color: '#e6b600' } },
                    { name: '独董独立发表反对意见数', itemStyle: { color: '#e6b600' } }
                ]
            },
            {
                name: '股东大会',
                symbolSize: 8,
                itemStyle: { color: '#e6b600' },
                children: [
                    { name: '股东大会的董事出席率', itemStyle: { color: '#e6b600' } },
                    { name: '股东大会是否采用累积投票制', itemStyle: { color: '#e6b600' } },
                    { name: '股东大会决议事项投票率', itemStyle: { color: '#e6b600' } },
                    { name: '董事会决议事项反对率', itemStyle: { color: '#e6b600' } }
                ]
            },
            {
                name: '与党委的关系',
                symbolSize: 8,
                itemStyle: { color: '#e6b600' },
                children: [
                    { name: '党建条款是否进入公司章程', itemStyle: { color: '#e6b600' } },
                    { name: '党委与董事会成员是否双向进入、交叉任职', itemStyle: { color: '#e6b600' } },
                    { name: '决策程序上是否党委会前置', itemStyle: { color: '#e6b600' } },
                    { name: '是否披露党委会等党组织参与治理情况', itemStyle: { color: '#e6b600' } }
                ]
            }
        ]
    };
    const treeData3 = {
        name: '省份3',
        symbolSize: 10,
        itemStyle: { color: '#005eaa' },
        label: { fontSize: 14 },
        children: [
            {
                name: '社会',
                symbolSize: 8,
                itemStyle: { color: '#005eaa' },
                children: [
                    { name: '每股社会责任值', itemStyle: { color: '#005eaa' } },
                    { name: '纳税总额', itemStyle: { color: '#005eaa' } },
                    { name: '就业人数', itemStyle: { color: '#005eaa' } },
                    { name: '环保、扶贫和慈善投入', itemStyle: { color: '#005eaa' } }
                ]
            },
            {
                name: '股东',
                symbolSize: 8,
                itemStyle: { color: '#005eaa' },
                children: [
                    { name: '净资产收益率', itemStyle: { color: '#005eaa' } },
                    { name: '市值增值率', itemStyle: { color: '#005eaa' } },
                    { name: '股息率', itemStyle: { color: '#005eaa' } }
                ]
            },
            {
                name: '员工',
                symbolSize: 8,
                itemStyle: { color: '#005eaa' },
                children: [
                    { name: '员工收入增幅', itemStyle: { color: '#005eaa' } },
                    { name: '公司人均薪酬', itemStyle: { color: '#005eaa' } },
                    { name: '行业平均人均薪酬', itemStyle: { color: '#005eaa' } },
                    { name: '是否员工持股', itemStyle: { color: '#005eaa' } }
                ]
            },
            {
                name: '客户',
                symbolSize: 8,
                itemStyle: { color: '#005eaa' },
                children: [
                    { name: '研发占比', itemStyle: { color: '#005eaa' } },
                    { name: '市场份额', itemStyle: { color: '#005eaa' } },
                    { name: '毛利率', itemStyle: { color: '#005eaa' } }
                ]
            },
            {
                name: '外部评价',
                symbolSize: 8,
                itemStyle: { color: '#005eaa' },
                children: [
                    { name: '是否入选上市公司“金圆桌奖”', itemStyle: { color: '#005eaa' } },
                    { name: '是否进入明晟指数', itemStyle: { color: '#005eaa' } },
                    { name: '是否上证180治理', itemStyle: { color: '#005eaa' } },
                    { name: '负面新闻报道转载数', itemStyle: { color: '#005eaa' } }
                ]
            }
        ]
    };
    const treeData4 = {
        name: '省份4',
        symbolSize: 10,
        itemStyle: { color: '#339ca8' },
        label: { fontSize: 14 },
        children: [
            {
                name: '披露日期',
                symbolSize: 8,
                itemStyle: { color: '#339ca8' },
                children: [
                    { name: '年报披露日期距1月1日的天数', itemStyle: { color: '#339ca8' } },
                    { name: '半年报披露日期距7月1日的天数', itemStyle: { color: '#339ca8' } },
                    { name: '一季报披露日期距4月1日的天数', itemStyle: { color: '#339ca8' } },
                    { name: '三季报披露日期距10月1日的天数', itemStyle: { color: '#339ca8' } },
                ]
            },
            {
                name: '披露一致性',
                symbolSize: 8,
                itemStyle: { color: '#339ca8' },
                children: [
                    { name: '信息披露、定期报告披露后的更正数量', itemStyle: { color: '#339ca8' } },
                    { name: '业绩预告与正式公告是否一致', itemStyle: { color: '#339ca8' } }
                ]
            },
            {
                name: '内部控制',
                symbolSize: 8,
                itemStyle: { color: '#339ca8' },
                children: [
                    { name: '内部控制文件累计数量（个）', itemStyle: { color: '#339ca8' } },
                    { name: '是否披露内部控制评价', itemStyle: { color: '#339ca8' } },
                    { name: '是否披露内部控制缺陷', itemStyle: { color: '#339ca8' } },
                    { name: '是否有效实施内部控制缺陷整改', itemStyle: { color: '#339ca8' } }
                ]
            },
            {
                name: '当初审计报告意见',
                itemStyle: { color: '#339ca8' },
                symbolSize: 8,
                children: [
                    { name: '标准无保留', itemStyle: { color: '#339ca8' } },
                    { name: '拒绝发表意见', itemStyle: { color: '#339ca8' } },
                    { name: '否定意见', itemStyle: { color: '#339ca8' } }
                ]
            }
        ]
    };
    const treeData5 = {
        name: '省份5',
        symbolSize: 10,
        itemStyle: { color: '#7760f6' },
        label: { fontSize: 14 },
        children: [
            {
                name: '非独立董事薪酬与激励',
                symbolSize: 8,
                itemStyle: { color: '#7760f6' },
                children: [
                    { name: '董事本年薪酬', itemStyle: { color: '#7760f6' } },
                    { name: '行业董事平均薪酬', itemStyle: { color: '#7760f6' } },
                    { name: '董事持股人数', itemStyle: { color: '#7760f6' } },
                    { name: '平均持股比例', itemStyle: { color: '#7760f6' } },
                    { name: '董事增持次数', itemStyle: { color: '#7760f6' } },
                    { name: '董事减持次数', itemStyle: { color: '#7760f6' } }
                ]
            },
            {
                name: '独立董事津贴',
                symbolSize: 8,
                itemStyle: { color: '#7760f6' },
                children: [
                    { name: '独立董事本年津贴', itemStyle: { color: '#7760f6' } },
                    { name: '行业独立董事平均津贴', itemStyle: { color: '#7760f6' } }
                ]
            },
            {
                name: '董事责任',
                symbolSize: 8,
                itemStyle: { color: '#7760f6' },
                children: [
                    { name: '董事是否遭批评、谴责、禁入等处罚', itemStyle: { color: '#7760f6' } },
                    { name: '诉讼金额', itemStyle: { color: '#7760f6' } },
                    { name: '赔偿金额', itemStyle: { color: '#7760f6' } }
                ]
            }
        ]
    };
    const treeData = {
        name: '热门打卡地点',
        symbolSize: 12,
        label: { fontSize: 16 },
        children: [
            treeData1,
            treeData2,
            treeData3,
            treeData4,
            treeData5
        ]
    };
    const treeChartOpt = {
        title: {
            text: "五大热门城市",
            subtext: "按游客满意度排序",
            textStyle: {
                color: "#fff",
                fontSize: 30
            },
            subtextStyle: {
                fontSize: 15
            },
            left: 15,
            top: 15
        },
        series: [
            {
                name: '董事会指标体系',
                type: 'tree',
                left: '5%',
                right: '20%',
                top: '1%',
                bottom: '1%',
                orient: 'LR', //方向
                initialTreeDepth: 0, //深度
                symbol: 'circle',
                itemStyle: {
                    color: '#ab2042',
                    borderColor: '#9aa8d4'
                },
                lineStyle: {
                    width: 1,
                    curveness: .9
                },
                label: {
                    color: '#9aa8d4',
                    position: 'bottom'
                },
                leaves: {
                    label: {
                        position: 'right'
                    }
                },
                data: [treeData]
            }
        ]
    };
    treeChart.setOption(treeChartOpt);

    //动态逐层级显示
    let deep = 1;
    let intervalId = window.setInterval(function () {
        treeChart.setOption({
            series: [{
                name: '董事会指标体系',
                initialTreeDepth: deep++
            }]
        });
        if (deep > 3) {
            window.clearInterval(intervalId);
        }
    }, 1000);

    //浏览器窗口发生变化时，重置报表大小
    $(window).resize(function () {
        treeChart.resize();
    });
});
