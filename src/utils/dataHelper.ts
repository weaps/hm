interface Key {
	dataKey: string
	primaryKey: string
}
class DataHelper {
	dataKey: string
	primaryKey: string

	constructor(options: Key) {
		this.dataKey = options.dataKey
		this.primaryKey = options.primaryKey
	}
	getLocalData(): any {
		const data: string | null = localStorage.getItem(this.dataKey)
		let arrData: object[] = []

		arrData = data !== null ? JSON.parse(data) : []

		return arrData
	}

	saveData(data: object[]): void {
		localStorage.setItem(this.dataKey, JSON.stringify(data))
	}

	addData(str: string): number {
		let data = this.getLocalData()
		let obj: any = {
			content: str,
		}
		// 自动生成Id
		const newId = data.length
			? data[data.length - 1][this.primaryKey] + 1
			: 1
		obj[this.primaryKey] = newId
		data.push(obj)
		return newId
	}
	// 删除数据
	delData(id: string | number): boolean {
		let data = this.getLocalData()
		const index = data.findIndex((ele: any) => {
			return ele[this.primaryKey] === id
		})

		// 判断下标是否为空
		if (index > -1) {
			data.splice(index, 1)
			return true
		}
		return false
	}
}

export default DataHelper
