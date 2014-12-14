var Grid = require("./../lib/grid");

var grid = new Grid([
    ["鹈鹕（主队）"],
    ["首发", "位置", "时间", "投篮", "3分", "罚球", "前场", "后场", "篮板", "助攻", "犯规", "抢断", "失误", "封盖", "得分", "+/-"],
    ["朱-霍勒迪", "PG", "33", "7-12", "0-1", "2-2", "0", "3", "3", "8", "4", "0", "4", "1", "16", "-2"],
    ["泰瑞克-埃文斯", "G/F", "40", "13-24", "2-6", "3-5", "1", "1", "2", "10", "0", "1", "2", "1", "31", "+13"],
    ["卢克-巴比特", "SF", "30", "2-6", "2-5", "0-0", "0", "5", "5", "0", "2", "2", "0", "0", "6", "+5"],
    ["欧米尔-阿西克", "F/C", "32", "3-4", "0-0", "3-4", "3", "11", "14", "1", "1", "0", "0", "1", "9", "+1"],
    ["安东尼-戴维斯", "F/C", "7", "4-4", "0-0", "0-2", "0", "1", "1", "0", "0", "0", "0", "0", "8", "-1"],
    ["替补", "", "时间", "投篮", "3分", "罚球", "前场", "后场", "篮板", "助攻", "犯规", "抢断", "失误", "封盖", "得分", "+/-"],
    ["莱恩-安德森", "F/C", "41", "9-18", "8-14", "4-4", "1", "3", "4", "0", "0", "1", "0", "1", "30", "+9"],
    ["奥斯汀-里弗斯", "G", "23", "2-5", "0-1", "7-7", "0", "2", "2", "1", "2", "1", "1", "0", "11", "-3"],
    ["杰夫-威西", "C", "13", "1-2", "0-0", "0-1", "0", "4", "4", "0", "1", "0", "0", "1", "2", "+4"],
    ["丹特-坎宁安", "PF", "11", "1-1", "0-0", "0-0", "1", "1", "2", "1", "4", "0", "0", "1", "2", "-1"],
    ["吉默-弗雷戴特", "G", "7", "2-3", "0-1", "0-0", "0", "1", "1", "0", "0", "0", "0", "0", "4", "0"],
    ["阿莱克西-阿金萨", "F/C", "3", "0-0", "0-0", "0-0", "0", "1", "1", "0", "1", "0", "0", "0", "0", "0"],
    ["贾勒-梅克尔", "G", "0", "0-0", "0-0", "0-0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["拉斯-史密斯", "PG", "0", "0-0", "0-0", "0-0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["约翰-萨尔蒙斯", "G/F", "0", "0-0", "0-0", "0-0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["埃里克-戈登", "SG", "0", "0-0", "0-0", "0-0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["统计", "", "", "44-79", "12-28", "19-25", "6", "33", "39", "21", "15", "5", "7", "6", "119", ""],
    ["命中率", "", "", "55.7%", "42.9%", "76.0%", "", "", "", "", "", "", "", "", "", ""],
    ["骑士（客队）"],
    ["首发", "", "时间", "投篮", "3分", "罚球", "前场", "后场", "篮板", "助攻", "犯规", "抢断", "失误", "封盖", "得分", "+/-"],
    ["凯里-欧文", "G", "39", "7-19", "1-4", "2-2", "1", "1", "2", "7", "3", "1", "2", "0", "17", "0"],
    ["肖恩-马里昂", "G/F", "21", "3-7", "0-1", "0-0", "0", "2", "2", "2", "2", "0", "0", "1", "6", "-10"],
    ["勒布朗-詹姆斯", "F", "38", "17-24", "2-2", "5-8", "0", "5", "5", "5", "1", "0", "2", "1", "41", "-3"],
    ["凯文-乐福", "F/C", "43", "5-11", "1-5", "10-11", "3", "4", "7", "3", "3", "2", "1", "1", "21", "-1"],
    ["安德森-瓦莱乔", "F/C", "19", "5-8", "0-0", "1-2", "2", "5", "7", "0", "2", "1", "0", "1", "11", "-12"],
    ["替补", "", "时间", "投篮", "3分", "罚球", "前场", "后场", "篮板", "助攻", "犯规", "抢断", "失误", "封盖", "得分", "+/-"],
    ["特里斯坦-汤普森", "F/C", "30", "2-6", "0-0", "0-0", "3", "7", "10", "1", "3", "0", "0", "2", "4", "+7"],
    ["马修-戴拉维多瓦", "PG", "24", "0-5", "0-5", "0-0", "2", "3", "5", "3", "2", "1", "1", "0", "0", "-17"],
    ["乔-哈里斯", "SG", "11", "2-4", "2-3", "0-0", "0", "0", "0", "1", "0", "0", "0", "0", "6", "+6"],
    ["迪昂-韦特斯", "SG", "10", "1-3", "0-0", "0-0", "0", "0", "0", "0", "2", "1", "0", "0", "2", "-4"],
    ["詹姆斯-琼斯", "G/F", "6", "2-2", "2-2", "0-0", "0", "2", "2", "0", "1", "0", "0", "0", "6", "+9"],
    ["亚历克斯-柯克", "C", "0", "0-0", "0-0", "0-0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["AJ-普莱斯", "PG", "0", "0-0", "0-0", "0-0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["布兰登-海伍德", "C", "0", "0-0", "0-0", "0-0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["路易斯-阿蒙德森", "PF", "0", "0-0", "0-0", "0-0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["迈克-米勒", "G/F", "0", "0-0", "0-0", "0-0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["统计", "", "", "44-89", "8-22", "18-23", "11", "29", "40", "22", "19", "6", "6", "6", "114", ""],
    ["命中率", "", "", "49.4%", "36.4%", "78.3%", "", "", "", "", "", "", "", "", "", ""]
]);
grid.draw();


