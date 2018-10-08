new Vue({

    el: "#app",

    data: {
        rows: '',
        cols: '',
    },

    computed: {
        rowHeaders: function() {
            let arr = [];
            for (let i = 1; i <= this.cols; i++) {
                arr.push(i);
            }
            return arr;
        },
        factors: function() {
            let arr = [];
            for (let i = 1; i <= this.rows; i++) {
                let row = [i]
                for (let j = 1; j <= this.cols; j++) {
                    row.push(i * j);
                }
                arr.push(row);
            }
            return arr;
        }

    },

    methods: {
        showTable: function() {
            if (!this.rows || !this.cols) return;
            console.log(this.rows, 'x', this.cols);

        }
    }
});
