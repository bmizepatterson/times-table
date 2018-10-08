new Vue({

    el: "#app",

    data: {
        rows: '',
        cols: '',
        max:  12,
        highlight: null
    },

    computed: {
        headers: function() {
            let arr = [''];
            for (let i = 1; i <= this.cols; i++) {
                arr.push(i);
            }
            return arr;
        },
        multiples: function() {
            let arr = [];
            for (let i = 1; i <= this.rows; i++) {
                let row = [i]
                for (let j = 1; j <= this.cols; j++) {
                    row.push(i * j);
                }
                arr.push(row);
            }
            return arr;
        },
        readyForDisplay: function() {
            return (this.rows && this.cols && !this.outsideBounds);
        },
        outsideBounds: function() {
            return (this.rows > this.max || this.cols > this.max);
        }
    },

    methods: {
        isHighlighted: function(col) {
            return (this.highlight === col);
        }
    }
});
