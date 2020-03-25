"use strict";
// DataHelpler 类 用于操作localStorage
var DataHelpler = /** @class */ (function () {
    function DataHelpler(dataKey, primaryKey) {
        this.dataKey = dataKey;
        this.primaryKey = primaryKey;
    }
    // [{content:'3333', id :1},{content:'3333', id :1}]
    // 读取本地数据
    DataHelpler.prototype.readData = function () {
        var pinglunStr = localStorage.getItem(this.dataKey);
        var pinglunArr = []; // 这一定要给默认值
        if (pinglunStr) {
            pinglunArr = JSON.parse(pinglunStr);
        }
        return pinglunArr;
    };
    // 存本地数据
    DataHelpler.prototype.saveData = function (pinglunArr) {
        var pinglunStr = JSON.stringify(pinglunArr);
        localStorage.setItem(this.dataKey, pinglunStr);
    };
    // 新增本地数据
    DataHelpler.prototype.add = function (pinglunValue) {
        // 1.先取值
        var Data = this.readData();
        // 2.评论对象
        var obj = {
            content: pinglunValue
        };
        // 3.自动生成primaryKey  obj[this.primaryKey]
        // 拿到本地存储中最后一个值的primaryKey   +1
        var newId = Data.length > 0 ? Data[Data.length - 1][this.primaryKey] + 1 : 1;
        // 4. 将primaryKey 值 存到obj
        obj[this.primaryKey] = newId;
        Data.push(obj);
        this.saveData(Data);
        return newId;
    };
    // 删除
    DataHelpler.prototype.remove = function (ID) {
        var _this = this;
        debugger;
        // 1.先取值
        var Data = this.readData();
        // 2.遍历Data
        var Index = Data.findIndex(function (item) { return item[_this.primaryKey] == ID; });
        if (Index !== -1) {
            Data.splice(Index, 1);
            this.saveData(Data);
            return true;
        }
        return false;
    };
    return DataHelpler;
}());
