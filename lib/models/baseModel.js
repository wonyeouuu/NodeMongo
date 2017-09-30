export default {
    findCollectionAsync(config = {}) {
        return new Promise((resolve, reject) => {
            this.find(config).toArray((err, result) => {
                err !== null && reject(err)
                resolve(result)
            })
        })
    },

    findAsync(config = {}) {
        return new Promise((resolve, reject) => {
            this.findOne(config, (err, result) => {
                err !== null && reject(err)
                resolve(result)
            })
        })
    },
}
