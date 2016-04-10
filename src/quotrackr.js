'use strict';

module.exports = (() => {
    return {

        /**
         * Looks for the current price of the stock
         * @param  {string} stock The code of the stock, e.g. AAPL
         * @return {float} Stock's current price
         */
        price(stock) {
            return stock;
        },

        /**
         * Adds a stock code to the list of stocks that interests.
         * @param  {string} stock The code of the stock, e.g. AAPL
         * @return {void}
         */
        followStock(stock) {
            return stock;
        },

        /**
         * Removes a stock code from the list of stocks that interests.
         * @param  {[type]} stock [description]
         * @return {[type]}       [description]
         */
        unfollowStock(stock) {
            return stock;
        },

        /**
         * Removes all the stocks from the list.
         * @return {void}
         */
        removeList() {},

        /**
         * List the current prices of all stocks in the list.
         * @return {array} An array with an object containing the stock name and
         * its current price.
         */
        listPrices() {}
    };
})();
