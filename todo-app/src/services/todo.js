import { FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED } from './filter'
import { MODE_CREATE, MODE_SEARCH } from './mode'

export const getListRender = (list, mode, filter, query) => {
    const filterParam = 'completed'
    const searchParam = 'name'

    switch (mode) {
        case MODE_CREATE:
            switch (filter) {
                case FILTER_ALL:
                    return list
                case FILTER_ACTIVE:
                    return list.filter(item => {
                        return item[filterParam] === false
                    })
                case FILTER_COMPLETED:
                    return list.filter(item => {
                        return item[filterParam] === true
                    })
            }
        case MODE_SEARCH:
            switch (filter) {
                case FILTER_ALL:
                    return list.filter(item => {
                        return item[searchParam]
                            .toString()
                            .toLowerCase()
                            .indexOf(query.toLowerCase()) > -1
                        })
                case FILTER_ACTIVE:
                    const filterActiveResult = list.filter(item => {
                        return item[filterParam] === false
                    })
                    const searchActiveResult = filterActiveResult.filter(item => {
                        return item[searchParam]
                            .toString()
                            .toLowerCase()
                            .indexOf(query.toLowerCase()) > -1
                    })
                    return searchActiveResult
                case FILTER_COMPLETED:
                    const filterCompletedResult = list.filter(item => {
                        return item[filterParam] === true
                    })
                    const searchCompletedResult = filterCompletedResult.filter(item => {
                        return item[searchParam]
                            .toString()
                            .toLowerCase()
                            .indexOf(query.toLowerCase()) > -1
                    })
                    return searchCompletedResult
            }
    }
}