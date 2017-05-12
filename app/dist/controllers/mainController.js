/// <reference path="../_all.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    var MainController = (function () {
        function MainController($mdSidenav, testDataService, $mdEditDialog, $q, $timeout) {
            /**
             * Code to test the md-data-table - start
             */

            this.selectedGrid = [];
            this.limitOptions = [5, 10, 15];

            this.options = {
                rowSelection: true,
                multiSelect: true,
                autoSelect: true,
                decapitate: false,
                largeEditDialog: false,
                boundaryLinks: false,
                limitSelect: true,
                pageSelect: true
            };

            this.query = {
                order: 'name',
                limit: 5,
                page: 1
            };

            this.deserts = testDataService.getDeserts();

            this.editComment = function (event, dessert) {
                event.stopPropagation(); // in case autoselect is enabled

                var editDialog = {
                    modelValue: dessert.comment,
                    placeholder: 'Add a comment',
                    save: function (input) {
                        if (input.$modelValue === 'Donald Trump') {
                            input.$invalid = true;
                            return $q.reject();
                        }
                        if (input.$modelValue === 'Bernie Sanders') {
                            dessert.comment = 'FEEL THE BERN!';
                            return dessert.comment;
                        }
                        dessert.comment = input.$modelValue;
                    },
                    targetEvent: event,
                    title: 'Add a comment',
                    validators: {
                        'md-maxlength': 30
                    }
                };

                this.promise = null;

                if (this.options.largeEditDialog) {
                    this.promise = $mdEditDialog.large(editDialog);
                } else {
                    this.promise = $mdEditDialog.large(editDialog);
                }

                this.promise.then(function (ctrl) {
                    var input = ctrl.getInput();

                    input.$viewChangeListeners.push(function () {
                        input.$setValidity('test', input.$modelValue !== 'test');
                    });
                });
            };

            this.toggleLimitOptions = function () {
                this.limitOptions = this.limitOptions ? undefined : [5, 10, 15];
            };

            this.getTypes = function () {
                return ['Candy', 'Ice cream', 'Other', 'Pastry'];
            };

            this.loadStuff = function () {
                this.promise = $timeout(function () {
                    // loading
                }, 2000);
            };

            this.logItem = function (item) {
                console.log(item.name, 'was selected');
            };

            this.logOrder = function (order) {
                console.log('order: ', order);
            };

            this.logPagination = function (page, limit) {
                console.log('page: ', page);
                console.log('limit: ', limit);
            };
            /**
             * Code to test the md-data-table - start
             */

            /**
             * Custom code
             */

            this.toppings = [{
                    category: 'meat',
                    name: 'Pepperoni'
                },
                {
                    category: 'meat',
                    name: 'Sausage'
                },
                {
                    category: 'meat',
                    name: 'Ground Beef'
                },
                {
                    category: 'meat',
                    name: 'Bacon'
                },
                {
                    category: 'veg',
                    name: 'Mushrooms'
                },
                {
                    category: 'veg',
                    name: 'Onion'
                },
                {
                    category: 'veg',
                    name: 'Green Pepper'
                },
                {
                    category: 'veg',
                    name: 'Green Olives'
                }
            ];
            this.selectedToppings = [];
            this.printSelectedToppings = function printSelectedToppings() {
                var numberOfToppings = this.selectedToppings.length;

                // If there is more than one topping, we add an 'and'
                // to be gramatically correct. If there are 3+ toppings
                // we also add an oxford comma.
                if (numberOfToppings > 1) {
                    var needsOxfordComma = numberOfToppings > 2;
                    var lastToppingConjunction = (needsOxfordComma ? ',' : '') + ' and ';
                    var lastTopping = lastToppingConjunction +
                        this.selectedToppings[this.selectedToppings.length - 1];
                    return this.selectedToppings.slice(0, -1).join(', ') + lastTopping;
                }

                return this.selectedToppings.join('');
            };
            /**End */

            this.$mdSidenav = $mdSidenav;
            this.message = "Hello from MainController code";
            this.states = ('AL AK AZ').split(' ').map(function (state) {
                return {
                    abbrev: state
                };
            });
            this.userState = '';
            this.users = [{
                    "_id": "5914c04b35a44e6a835bc3ca",
                    "index": 0,
                    "guid": "ca7e8cd5-bfb0-4377-8ac3-145134357218",
                    "isActive": false,
                    "balance": "$2,028.46",
                    "picture": "http://placehold.it/32x32",
                    "age": 25,
                    "eyeColor": "brown",
                    "name": "Heather Gordon",
                    "gender": "female",
                    "company": "MYOPIUM",
                    "email": "heathergordon@myopium.com",
                    "phone": "+1 (810) 443-2463",
                    "address": "699 Trucklemans Lane, Fresno, Illinois, 3692",
                    "about": "Non sint ut anim pariatur enim Lorem esse. Ad laboris sit sint et minim in tempor amet ad in nulla. Excepteur laborum officia eu consectetur nulla aliqua sit eu velit Lorem esse culpa nulla culpa. Amet nostrud veniam officia laboris duis in non anim.\r\n",
                    "registered": "2016-04-08T11:58:51 -06:-30",
                    "latitude": 43.214912,
                    "longitude": -28.131517,
                    "tags": [
                        "ex",
                        "velit",
                        "cupidatat",
                        "nulla",
                        "laborum",
                        "est",
                        "nostrud"
                    ],
                    "friends": [{
                            "id": 0,
                            "name": "Barrera Leonard"
                        },
                        {
                            "id": 1,
                            "name": "Sheryl Vargas"
                        },
                        {
                            "id": 2,
                            "name": "Goff Mcgowan"
                        }
                    ],
                    "greeting": "Hello, Heather Gordon! You have 1 unread messages.",
                    "favoriteFruit": "banana"
                },
                {
                    "_id": "5914c04bc83cf27c31976d40",
                    "index": 1,
                    "guid": "2c112261-be81-4b35-b1ea-fb148e27f709",
                    "isActive": false,
                    "balance": "$3,032.29",
                    "picture": "http://placehold.it/32x32",
                    "age": 32,
                    "eyeColor": "brown",
                    "name": "Ryan Bean",
                    "gender": "male",
                    "company": "SUNCLIPSE",
                    "email": "ryanbean@sunclipse.com",
                    "phone": "+1 (914) 493-3182",
                    "address": "155 Llama Court, Hobucken, Arizona, 3059",
                    "about": "Adipisicing aliqua officia nostrud dolore anim commodo eu velit dolore incididunt culpa nisi. Minim voluptate dolor mollit sit reprehenderit id commodo tempor amet. Culpa qui incididunt id amet labore ut in. Dolor officia aute incididunt non et quis ipsum eu. Ullamco sint culpa cupidatat cupidatat consectetur.\r\n",
                    "registered": "2017-01-02T01:39:38 -06:-30",
                    "latitude": 2.427651,
                    "longitude": -128.604777,
                    "tags": [
                        "excepteur",
                        "consequat",
                        "adipisicing",
                        "mollit",
                        "laborum",
                        "ad",
                        "velit"
                    ],
                    "friends": [{
                            "id": 0,
                            "name": "Annette Franco"
                        },
                        {
                            "id": 1,
                            "name": "Goodwin Branch"
                        },
                        {
                            "id": 2,
                            "name": "Jocelyn Reynolds"
                        }
                    ],
                    "greeting": "Hello, Ryan Bean! You have 1 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "_id": "5914c04b2be1723aeaa06135",
                    "index": 2,
                    "guid": "6183cd12-868a-4383-a05d-ee5d5f326fd1",
                    "isActive": true,
                    "balance": "$2,822.74",
                    "picture": "http://placehold.it/32x32",
                    "age": 25,
                    "eyeColor": "blue",
                    "name": "Valdez Morrow",
                    "gender": "male",
                    "company": "GEEKWAGON",
                    "email": "valdezmorrow@geekwagon.com",
                    "phone": "+1 (829) 546-2567",
                    "address": "991 McKinley Avenue, Biddle, Guam, 7991",
                    "about": "Commodo officia voluptate irure fugiat commodo fugiat elit nulla cupidatat. Minim commodo amet sunt deserunt minim excepteur duis sunt. Sit ipsum aliquip dolor non velit amet non eu sunt. Eiusmod do ullamco culpa et do Lorem exercitation. Aute et sunt et cupidatat cillum consectetur consequat eiusmod excepteur et dolor cupidatat pariatur. Aliqua tempor labore in irure ex officia magna excepteur aute quis consequat exercitation elit Lorem. Cillum aute exercitation nisi cupidatat aute sunt deserunt do est consequat eu cupidatat nisi fugiat.\r\n",
                    "registered": "2015-04-26T09:27:27 -06:-30",
                    "latitude": -25.186124,
                    "longitude": -57.676916,
                    "tags": [
                        "veniam",
                        "proident",
                        "minim",
                        "mollit",
                        "ad",
                        "velit",
                        "occaecat"
                    ],
                    "friends": [{
                            "id": 0,
                            "name": "Alisha Downs"
                        },
                        {
                            "id": 1,
                            "name": "Walters Mclean"
                        },
                        {
                            "id": 2,
                            "name": "Leonor Pearson"
                        }
                    ],
                    "greeting": "Hello, Valdez Morrow! You have 9 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "_id": "5914c04b767b0e94dc7348a6",
                    "index": 3,
                    "guid": "4bef2808-3048-420d-aedf-a4ebc6ec44ba",
                    "isActive": true,
                    "balance": "$3,967.88",
                    "picture": "http://placehold.it/32x32",
                    "age": 36,
                    "eyeColor": "brown",
                    "name": "Juana Brock",
                    "gender": "female",
                    "company": "ICOLOGY",
                    "email": "juanabrock@icology.com",
                    "phone": "+1 (953) 517-2735",
                    "address": "480 Flatlands Avenue, Harrodsburg, Georgia, 8607",
                    "about": "Deserunt commodo adipisicing consequat voluptate non dolor aliqua veniam. Tempor et occaecat minim tempor fugiat eu id nostrud occaecat. Cillum mollit culpa adipisicing ad quis commodo consectetur do sunt nisi dolore dolore anim. Sit duis amet deserunt in ut velit non culpa duis mollit in commodo excepteur in. Adipisicing anim id voluptate laboris do minim veniam do. Voluptate laborum esse sunt commodo quis. Ipsum incididunt amet aute pariatur quis ut do mollit.\r\n",
                    "registered": "2016-12-24T10:05:07 -06:-30",
                    "latitude": 26.813602,
                    "longitude": -149.962101,
                    "tags": [
                        "consequat",
                        "cillum",
                        "reprehenderit",
                        "tempor",
                        "sit",
                        "in",
                        "aute"
                    ],
                    "friends": [{
                            "id": 0,
                            "name": "Karin Mccoy"
                        },
                        {
                            "id": 1,
                            "name": "Shelley Haney"
                        },
                        {
                            "id": 2,
                            "name": "Pickett Cobb"
                        }
                    ],
                    "greeting": "Hello, Juana Brock! You have 3 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "_id": "5914c04b52b3be252fcfd860",
                    "index": 4,
                    "guid": "f0b5a271-ea23-45fe-96ac-d3b1496d3bef",
                    "isActive": true,
                    "balance": "$2,589.88",
                    "picture": "http://placehold.it/32x32",
                    "age": 33,
                    "eyeColor": "brown",
                    "name": "Pacheco Grant",
                    "gender": "male",
                    "company": "VETRON",
                    "email": "pachecogrant@vetron.com",
                    "phone": "+1 (810) 521-3089",
                    "address": "504 Anthony Street, Dunlo, South Carolina, 6826",
                    "about": "Ex elit duis id id. Mollit ipsum eiusmod nulla veniam deserunt proident excepteur est. Do eiusmod pariatur irure ad commodo amet deserunt ullamco amet excepteur ipsum officia. Minim dolore eu ad est non nulla dolor elit laborum voluptate laboris.\r\n",
                    "registered": "2017-01-26T05:44:16 -06:-30",
                    "latitude": 39.713532,
                    "longitude": -31.430838,
                    "tags": [
                        "incididunt",
                        "labore",
                        "ut",
                        "velit",
                        "elit",
                        "irure",
                        "incididunt"
                    ],
                    "friends": [{
                            "id": 0,
                            "name": "Coffey Myers"
                        },
                        {
                            "id": 1,
                            "name": "Lesa Hinton"
                        },
                        {
                            "id": 2,
                            "name": "Marylou Nelson"
                        }
                    ],
                    "greeting": "Hello, Pacheco Grant! You have 8 unread messages.",
                    "favoriteFruit": "banana"
                },
                {
                    "_id": "5914c04b439fc65004bc9995",
                    "index": 5,
                    "guid": "9cfa606d-870d-4656-984c-8e4c2382da6b",
                    "isActive": false,
                    "balance": "$3,613.38",
                    "picture": "http://placehold.it/32x32",
                    "age": 29,
                    "eyeColor": "brown",
                    "name": "Melody Ward",
                    "gender": "female",
                    "company": "MAGNINA",
                    "email": "melodyward@magnina.com",
                    "phone": "+1 (804) 428-3510",
                    "address": "595 Kiely Place, Orason, Puerto Rico, 636",
                    "about": "Fugiat ex elit tempor consectetur reprehenderit laboris do proident. Proident ipsum et magna eiusmod laborum quis deserunt ullamco labore quis. Et laborum nulla anim culpa sunt nulla. Incididunt ipsum nostrud officia labore incididunt fugiat adipisicing labore.\r\n",
                    "registered": "2014-02-16T01:00:27 -06:-30",
                    "latitude": -49.265974,
                    "longitude": 130.666577,
                    "tags": [
                        "laborum",
                        "dolor",
                        "eu",
                        "cupidatat",
                        "dolore",
                        "eiusmod",
                        "ad"
                    ],
                    "friends": [{
                            "id": 0,
                            "name": "Franco Dean"
                        },
                        {
                            "id": 1,
                            "name": "Tracey Hodges"
                        },
                        {
                            "id": 2,
                            "name": "Estelle Ruiz"
                        }
                    ],
                    "greeting": "Hello, Melody Ward! You have 5 unread messages.",
                    "favoriteFruit": "apple"
                }
            ];
            this.selected = null;
        }
        MainController.prototype.toggleSideNav = function () {
            this.$mdSidenav('track').toggle();
        };
        MainController.prototype.selectUser = function (user) {
            this.selected = user;
            var sidNav = this.$mdSidenav('track');
            if (sidNav.isOpen()) {
                sidNav.close();
            }
        };
        return MainController;
    }());
    MainController.$inject = ['$mdSidenav', 'testDataService', '$mdEditDialog', '$q', '$timeout'];
    ContactManagerApp.MainController = MainController;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=mainController.js.map