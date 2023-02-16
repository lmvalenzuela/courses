export interface DataInterface {
  data: getAvailableFiltersForLanguageSearch
}

export interface getAvailableFiltersForLanguageSearch {
  campuses: Campus[]
  locations: Location[]
}

export interface Campus {
  id: number
  name: string
  location: {
    id: string
    country: string
  }
}

export interface Location {
  id: string
  name: string
  country: string
}
