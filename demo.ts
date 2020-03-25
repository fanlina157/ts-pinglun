// DataHelpler 类 用于操作localStorage
class DataHelpler {
  dataKey: string; //localstorage key
  primaryKey: string; // id

  constructor(dataKey: string, primaryKey: string) {
    this.dataKey = dataKey
    this.primaryKey = primaryKey
  }

  // [{content:'3333', id :1},{content:'3333', id :1}]
  // 读取本地数据
  readData(): any {
    let pinglunStr: string | null = localStorage.getItem(this.dataKey)
    let pinglunArr: any = [];   // 这一定要给默认值
    if (pinglunStr) {
      pinglunArr = JSON.parse(pinglunStr)
    }
    return pinglunArr
  }
  // 存本地数据
  saveData(pinglunArr: object[] ): void {
    let pinglunStr: string = JSON.stringify(pinglunArr)
    localStorage.setItem(this.dataKey, pinglunStr)
  }
  // 新增本地数据
  add(pinglunValue: string): number {
    // 1.先取值
    let Data: any = this.readData()
    // 2.评论对象
    let obj:any = {
      content: pinglunValue
    }
    // 3.自动生成primaryKey  obj[this.primaryKey]
    // 拿到本地存储中最后一个值的primaryKey   +1
    let newId: number = Data.length > 0 ? Data[Data.length -1][this.primaryKey] + 1 : 1;
    // 4. 将primaryKey 值 存到obj
    obj[this.primaryKey] = newId
    Data.push(obj)
    this.saveData(Data)
    return newId
  }
  // 删除
  remove(ID: number | string): boolean {
    // 1.先取值
    let Data: any = this.readData()
    // 2.遍历Data
   let Index :number =  Data.findIndex((item:any) =>item[this.primaryKey] == ID)
    if(Index !== -1) {
      Data.splice(Index, 1)
      this.saveData(Data)
      return true
    }
    return false
  }
}
