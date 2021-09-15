var models = [
    { name: "Футболка Thrasher ‘SAD BBQ’", cost: 29.95, amount: '0', inBasket: false, img: 'img/t-shirt-1.webp' },
    { name: "Футболка Thrasher ‘Scorched Outline’", cost: 28.35, amount: '0', inBasket: false, img: 'img/t-shirt-2.webp' },
    { name: "Футболка Thrasher ‘Gonz Cash tshirt’", cost: 16.99, amount: '0', inBasket: false, img: 'img/t-shirt-3.webp' },
    { name: "Футболка Thrasher ‘Goddess’", cost: 25.33, amount: '0', inBasket: false, img: 'img/t-shirt-4.webp' },
    { name: "Футболка Thrasher ‘New Boyfriend’", cost: 20.99, amount: '0', inBasket: false, img: 'img/t-shirt-5.webp' },
    { name: "Футболка Thrasher ‘Calligraphy’", cost: 23.69, amount: '0', inBasket: false, img: 'img/t-shirt-6.webp' }
];
var VueObject = new Vue({
    el: '#app',
    data: {
        models: models
    },
    computed: {
        totalcost: function () {
            totalcost = 0;
            for (model of this.models) {
                totalcost += model.amount * model.cost;
            }
            return totalcost;
        },
        amounts: function () {
            amounts = 0;
            for (model of this.models) {
                if (model.inBasket)
                    amounts++;
            }
            return amounts;
        },
        sortedList() {
            return this.models.sort(this.models.price);
        }
    },
    methods: {
        Add: function (model) {
            if (model.amount > 0) {
                model.amount != 0;
                model.inBasket = true;
            }
            if(model.amount == 0){
                model.amount = 1;
                model.inBasket = true;
            }
        },

        Pay: function () {
            for (model of this.models) {
                model.amount = '0';
                model.inBasket = false;
            }
        },

        Delete: function (model) {
            model.amount = '0';
            model.inBasket = false;
        }
    }
});


$(document).ready(function () {
    $("#tshirt").click(function () {
        $(".tshirt").show(function () {
            var tshirtModels = [
                { name: "Футболка Thrasher ‘SAD BBQ’", cost: 29.95, amount: '0', inBasket: false, img: 'img/t-shirt-1.webp' },
                { name: "Футболка Thrasher ‘Scorched Outline’", cost: 28.35, amount: '0', inBasket: false, img: 'img/t-shirt-2.webp' },
                { name: "Футболка Thrasher ‘Gonz Cash tshirt’", cost: 16.99, amount: '0', inBasket: false, img: 'img/t-shirt-3.webp' },
                { name: "Футболка Thrasher ‘Goddess’", cost: 25.33, amount: '0', inBasket: false, img: 'img/t-shirt-4.webp' },
                { name: "Футболка Thrasher ‘New Boyfriend’", cost: 20.99, amount: '0', inBasket: false, img: 'img/t-shirt-5.webp' },
                { name: "Футболка Thrasher ‘Calligraphy’", cost: 23.69, amount: '0', inBasket: false, img: 'img/t-shirt-6.webp' }
            ];
            for (var i = 0; i < 6; i++) {
                Vue.set(VueObject.models, i, tshirtModels[i]);
            }
        });
        $(".hudi").hide();
        $(".brk").hide();
        $(".acces").hide();
    });
});
$(document).ready(function () {
    $("#hudi").click(function () {
        $(".tshirt").hide();
        $(".hudi").show(function () {
            var hudiModels = [
                { name: "Худи Thrasher ‘Liberty Goat’", cost: 85.50, amount: '0', inBasket: false, img: 'img/hudi-1.webp' },
                { name: "Худи Thrasher ‘Intro Burner’", cost: 89.99, amount: '0', inBasket: false, img: 'img/hudi-2.webp' },
                { name: "Свитшот Thrasher ‘Calligraphy’", cost: 77.14, amount: '0', inBasket: false, img: 'img/hudi-3.webp' },
                { name: "Свитшот Thrasher ‘Goddess’", cost: 75.49, amount: '0', inBasket: false, img: 'img/hudi-4.webp' },
                { name: "Лонгслив Thrasher ‘Racing Longsleeve’", cost: 70.32, amount: '0', inBasket: false, img: 'img/hudi-5.webp' },
                { name: "Лонгслив Thrasher ‘Doubles’", cost: 69.55, amount: '0', inBasket: false, img: 'img/hudi-6.webp' }
            ];
            for (var i = 0; i < 6; i++) {
                Vue.set(VueObject.models, i, hudiModels[i]);
            }
            $(".hudi").css({
                "display": "flex",
                "justify-content": "space-between",
                "flex-direction": "row",
                "flex-wrap": "wrap",
                "align-content": "space-between"
            });
        });
        $(".brk").hide();
        $(".acces").hide();
    });
});

$(document).ready(function () {
    $("#brk").click(function () {
        $(".tshirt").hide();
        $(".hudi").hide();
        $(".brk").show(function () {
            var brkModels = [
                { name: "Брюки Thrasher ‘Ruck Single Knee Pant’", cost: 119.95, amount: '0', inBasket: false, img: 'img/brk-1.webp' },
                { name: "Джинсы Thrasher ‘NEW THREAT II’", cost: 99.99, amount: '0', inBasket: false, img: 'img/brk-2.webp' },
                { name: "Брюки Thrasher x NASA", cost: 44.99, amount: '0', inBasket: false, img: 'img/brk-3.webp' },
                { name: "Джинсы Thrasher ‘Sid Pant’", cost: 60.49, amount: '0', inBasket: false, img: 'img/brk-4.webp' },
                { name: "Джинсы Thrasher ‘Rebel’ (Slim)", cost: 74.99, amount: '0', inBasket: false, img: 'img/brk-5.webp' },
                { name: "Джинсы Thrasher ‘Tight Key Black’", cost: 54.69, amount: '0', inBasket: false, img: 'img/brk-6.webp' }
            ];
            for (var i = 0; i < 6; i++) {
                Vue.set(VueObject.models, i, brkModels[i]);
            }
            $(".brk").css({
                "display": "flex",
                "justify-content": "space-between",
                "flex-direction": "row",
                "flex-wrap": "wrap",
                "align-content": "space-between"
            });
        });
        $(".acces").hide();
    });
});

$(document).ready(function () {
    $("#acces").click(function () {
        $(".tshirt").hide();
        $(".hudi").hide();
        $(".brk").hide();
        $(".acces").show(function () {
            var accesModels = [
                { name: "Панама Thrasher ‘Godzilla’", cost: 49.99, amount: '0', inBasket: false, img: 'img/acces-1.webp' },
                { name: "Кепка-трекер Thrasher ‘Roses’", cost: 29.99, amount: '0', inBasket: false, img: 'img/acces-2.webp' },
                { name: "Шапка Thrasher ‘SKATE MAG’", cost: 25.49, amount: '0', inBasket: false, img: 'img/acces-3.webp' },
                { name: "Кепка Thrasher x Lotties", cost: 35.60, amount: '0', inBasket: false, img: 'img/acces-4.webp' },
                { name: "Шапка Thrasher ‘Sherpa Magazine’", cost: 47.35, amount: '0', inBasket: false, img: 'img/acces-5.webp' },
                { name: "Книга Thrasher ‘Mail Drop 1981-2019’", cost: 64.49, amount: '0', inBasket: false, img: 'img/acces-6.webp' }
            ];
            for (var i = 0; i < 6; i++) {
                Vue.set(VueObject.models, i, accesModels[i]);
            }
            $(".acces").css({
                "display": "flex",
                "justify-content": "space-between",
                "flex-direction": "row",
                "flex-wrap": "wrap",
                "align-content": "space-between"
            });
        });
    });
});
