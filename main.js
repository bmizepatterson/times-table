let max = 12;

new Vue({

    el: "#app",

    data: {
        rows: '',
        cols: '',
        highlight: null
    },

    computed: {
        headers: function() {
            // First element is the empty top-corner table cell
            let arr = [''];
            // We start at 1.
            for (let i = 1; i <= this.cols; i++) {
                arr.push(i);
            }
            return arr;
        },
        multiples: function() {
            let arr = [];
            for (let i = 1; i <= this.rows; i++) {
                // First element the far left table column.
                let row = [i];
                for (let j = 1; j <= this.cols; j++) {
                    row.push(i * j);
                }
                arr.push(row);
            }
            return arr;
        },
        readyForDisplay: function() {
            return (this.rows > 0 && this.cols > 0 && !this.outsideBounds);
        },
        outsideBounds: function() {
            return (this.rows > max || this.cols > max);
        }
    },

    methods: {
        isHighlighted: function(col) {
            return (this.highlight === col);
        }
    }
});
