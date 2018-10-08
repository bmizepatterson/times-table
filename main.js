new Vue({

    el: "#app",

    data: {
        rows: '',
        cols: '',
        highlight: null,
        max: 12
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
            return (this.rows >= 1 && this.cols >= 1 && !this.outsideBounds);
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
