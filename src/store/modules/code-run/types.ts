export interface SchemaType {
  name: string
  data_type: string
}

export interface ChartFormType {
  chartType: string
  selectedYTypes: string[]
  groupBySelectedTypes: string[]
}

export interface RecordsType {
  rows: [][]
  schema: { column_schemas: SchemaType[] }
}

export interface OutputType {
  records?: RecordsType
  affectedrows?: any
}

export interface DimensionType {
  name: string
}

export interface ResultType {
  records: RecordsType
  dimensionsAndXName: { dimensions: DimensionType[]; xAxis: string }
  key: number
  type: string
}

export interface SeriesType {
  name: string
  type: string
  smooth: boolean
  encode: { x: string; y: string; label?: string[] }
  symbolSize: number
  datasetIndex?: number
}

export interface datasetType {
  dimensions?: DimensionType[]
  source?: [][]
  transform?: {}
  fromDatasetIndex?: number
}
