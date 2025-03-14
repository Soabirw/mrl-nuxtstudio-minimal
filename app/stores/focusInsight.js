import { defineStore } from 'pinia'

export const useFocusInsightStore = defineStore('focusInsight', () => {
    const joyfulInsights = {
        'first': [
            {
                id: 'JFI101',
                text: {
                    summary: 'Through the disobedience of Adam sin enters the world.',
                    scriptural: 'Therefore as sin came into the world through one man and death through sin, and so death spread to all men because all men sinned'
                },
                link: {
                    label: 'Rom. 5:12',
                    url: 'https://www.biblegateway.com/passage/?search=Rom.%205%3A12&version=RSVCE',
                    tip: 'Therefore as sin came into the world through one man and death through sin, and so death spread to all men because all men sinned'
                },
            },
            {
                id: 'JFI102',
                text: {
                    summary: 'The Father sends His Son to save the world.',
                    scriptural: 'For God sent the Son into the world, not to condemn the world, but that the world might be saved through him.'
                },
                link: {
                    label: 'Jn. 3:17',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%203%3A17&version=RSVCE',
                    tip: 'For God sent the Son into the world, not to condemn the world, but that the world might be saved through him.'
                }
            },
            {
                id: 'JFI103',
                text: {
                    summary: 'The Angel Gabriel is sent to a virgin named Mary.',
                    scriptural: '[26] In the sixth month the angel Gabriel was sent from God to a city of Galilee named Nazareth, [27] to a virgin betrothed to a man whose name was Joseph, of the house of David; and the virgin’s name was Mary.'
                },
                link: {
                    label: 'Lk. 1:26-27',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%201%3A26-27&version=RSVCE',
                    tip: '[26] In the sixth month the angel Gabriel was sent from God to a city of Galilee named Nazareth, [27] to a virgin betrothed to a man whose name was Joseph, of the house of David; and the virgin’s name was Mary.'
                }
            },
            {
                id: 'JFI104',
                text: {
                    summary: 'The Angel tells Mary: “You are to have a Son and will name Him Jesus.”',
                    scriptural: 'And behold, you will conceive in your womb and bear a son, and you shall call his name Jesus.'
                },
                link: {
                    label: 'Lk. 1:31',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%201%3A31&version=RSVCE',
                    tip: 'And behold, you will conceive in your womb and bear a son, and you shall call his name Jesus.'
                }
            },
            {
                id: 'JFI105',
                text: {
                    summary: 'He is the Son of God.',
                    scriptural: 'He will be great, and will be called the Son of the Most High; and the Lord God will give to him the throne of his father David'
                },
                link: {
                    label: 'Lk. 1:32',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%201%3A32&version=RSVCE',
                    tip: 'He will be great, and will be called the Son of the Most High; and the Lord God will give to him the throne of his father David'
                }
            },
            {
                id: 'JFI106',
                text: {
                    summary: 'Mary consents: “Let it be done to me.”',
                    scriptural: 'And Mary said, “Behold, I am the handmaid of the Lord; let it be to me according to your word.” And the angel departed from her.'
                },
                link: {
                    label: 'Lk. 1:38',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%201%3A38&version=RSVCE',
                    tip: 'And Mary said, “Behold, I am the handmaid of the Lord; let it be to me according to your word.” And the angel departed from her.',
                }
            },
            {
                id: 'JFI107',
                text: {
                    summary: 'God the Son becomes Man, in obedience to His Father.',
                    scriptural: 'And the angel said to her,\n' +
                        '\n' +
                        '“The Holy Spirit will come upon you,\n' +
                        'and the power of the Most High will overshadow you;\n' +
                        'therefore the child to be born will be called holy,\n' +
                        'the Son of God.'
                },
                link: {
                    label: 'Lk. 1:35',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%201%3A35&version=RSVCE',
                    tip: 'And the angel said to her,\n' +
                        '\n' +
                        '“The Holy Spirit will come upon you,\n' +
                        'and the power of the Most High will overshadow you;\n' +
                        'therefore the child to be born will be called holy,\n' +
                        'the Son of God.'
                }
            },
            {
                id: 'JFI108',
                text: {
                    summary: 'By His obedience many shall be saved.',
                    scriptural: 'For as by one man’s disobedience many were made sinners, so by one man’s obedience many will be made righteous.'
                },
                link: {
                    label: 'Rom. 5:19',
                    url: 'https://www.biblegateway.com/passage/?search=Rom.%205%3A19&version=RSVCE',
                    tip: 'For as by one man’s disobedience many were made sinners, so by one man’s obedience many will be made righteous.'
                }
            },
            {
                id: 'JFI109',
                text: {
                    summary: 'Mary becomes Mother of God.',
                    scriptural: 'And the angel said to her,\n' +
                        '\n' +
                        '“The Holy Spirit will come upon you,\n' +
                        'and the power of the Most High will overshadow you;\n' +
                        'therefore the child to be born will be called holy,\n' +
                        'the Son of God.'
                },
                link: {
                    label: 'Lk. 1:35',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%201%3A35&version=RSVCE',
                    tip: 'And the angel said to her,\n' +
                        '\n' +
                        '“The Holy Spirit will come upon you,\n' +
                        'and the power of the Most High will overshadow you;\n' +
                        'therefore the child to be born will be called holy,\n' +
                        'the Son of God.'
                }
            },
            {
                id: 'JFI110',
                text: {
                    summary: 'Nothing is impossible with God.',
                    scriptural: 'For with God nothing will be impossible.'
                },
                link: {
                    label: 'Lk. 1:37',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%201%3A37&version=RSVCE',
                    tip: 'For with God nothing will be impossible.'
                }
            },
        ],
        second: [
            {
                id: 'JFI201',
                text: {
                    summary: 'Mary visits her elderly cousin Elizabeth.',
                    scriptural: 'and she entered the house of Zechari′ah and greeted Elizabeth.'
                },
                link: {
                    label: 'Lk. 1:40',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%201%3A40&version=RSVCE',
                    tip: 'and she entered the house of Zechari′ah and greeted Elizabeth.'
                }
            },
            {
                id: 'JFI202',
                text: {
                    summary: 'Elizabeth is with child. His name is John.',
                    scriptural: 'But the angel said to him, “Do not be afraid, Zechari′ah, for your prayer is heard, and your wife Elizabeth will bear you a son, and you shall call his name John.'
                },
                link: {
                    label: 'Lk. 1:13',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%201%3A13&version=RSVCE',
                    tip: 'But the angel said to him, “Do not be afraid, Zechari′ah, for your prayer is heard, and your wife Elizabeth will bear you a son, and you shall call his name John.'
                }
            },
            {
                id: 'JFI203',
                text: {
                    summary: 'She greets Mary: “Blessed are you because you believed.”',
                    scriptural: 'And blessed is she who believed that there would be a fulfilment of what was spoken to her from the Lord.”'
                },
                link: {
                    label: 'Lk. 1:45',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%201%3A45&version=RSVCE',
                    tip: 'And blessed is she who believed that there would be a fulfilment of what was spoken to her from the Lord.”'
                }
            },
            {
                id: 'JFI204',
                text: {
                    summary: 'Mary herself is with Child, through the Holy Spirit.',
                    scriptural: 'Now the birth of Jesus Christ took place in this way. When his mother Mary had been betrothed to Joseph, before they came together she was found to be with child of the Holy Spirit;'
                },
                link: {
                    label: 'Mat. 1:18',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%201%3A45&version=RSVCE',
                    tip: 'Now the birth of Jesus Christ took place in this way. When his mother Mary had been betrothed to Joseph, before they came together she was found to be with child of the Holy Spirit;'
                }
            },
            {
                id: 'JFI205',
                text: {
                    summary: 'She answers: “My soul proclaims the greatness of the Lord.”',
                    scriptural: 'And Mary said, Mary’s Song of Praise “My soul magnifies the Lord,...'
                },
                link: {
                    label: 'Lk. 1:46',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%201%3A45&version=RSVCE',
                    tip: 'And Mary said, Mary’s Song of Praise “My soul magnifies the Lord,...'
                }
            },
            {
                id: 'JFI206',
                text: {
                    summary: '“His mercy reaches from age to age.”',
                    scriptural: 'And his mercy is on those who fear him from generation to generation.'
                },
                link: {
                    label: 'Lk. 1:50',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%201%3A50&version=RSVCE',
                    tip: 'And his mercy is on those who fear him from generation to generation.'
                }
            },
            {
                id: 'JFI207',
                text: {
                    summary: 'Mary, the Mother of God, stays to help Elizabeth.',
                    scriptural: 'And Mary remained with her about three months, and returned to her home.'
                },
                link: {
                    label: 'Lk. 1:56',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%201%3A56&version=RSVCE',
                    tip: 'And Mary remained with her about three months, and returned to her home.'
                }
            },
            {
                id: 'JFI208',
                text: {
                    summary: 'After three months Mary returns to her home in Nazareth.',
                    scriptural: 'And Mary remained with her about three months, and returned to her home.'
                },
                link: {
                    label: 'Lk. 1:56',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%201%3A56&version=RSVCE',
                    tip: 'And Mary remained with her about three months, and returned to her home.'
                }
            },
            {
                id: 'JFI209',
                text: {
                    summary: 'Do good to all.',
                    scriptural: 'So then, as we have opportunity, let us do good to all men, and especially to those who are of the household of faith.'
                },
                link: {
                    label: 'Galat. 6:10',
                    url: 'https://www.biblegateway.com/passage/?search=Galat.%206%3A10&version=RSVCE',
                    tip: 'So then, as we have opportunity, let us do good to all men, and especially to those who are of the household of faith.'
                }
            },
            {
                id: 'JFI210',
                text: {
                    summary: 'Be at peace with everyone.',
                    scriptural: 'If possible, so far as it depends upon you, live peaceably with all.'
                },
                link: {
                    label: 'Rom. 12:18',
                    url: 'https://www.biblegateway.com/passage/?search=Rom.%2012%3A18&version=RSVCE',
                    tip: 'If possible, so far as it depends upon you, live peaceably with all.'
                }
            },
        ],
        third: [
            {
                id: 'JFI301',
                text: {
                    summary: 'In Bethlehem will be born He Who is to rule my people.',
                    scriptural: 'But you, O Bethlehem Eph′rathah,\n' +
                        '    who are little to be among the clans of Judah,\n' +
                        'from you shall come forth for me\n' +
                        '    one who is to be ruler in Israel,\n' +
                        'whose origin is from of old,\n' +
                        '    from ancient days.'
                },
                link: {
                    label: 'Micah 5:2',
                    url: 'https://www.biblegateway.com/passage/?search=Micah%205%3A2&version=RSVCE',
                    tip: 'But you, O Bethlehem Eph′rathah,\n' +
                        '    who are little to be among the clans of Judah,\n' +
                        'from you shall come forth for me\n' +
                        '    one who is to be ruler in Israel,\n' +
                        'whose origin is from of old,\n' +
                        '    from ancient days.'
                }
            },
            {
                id: 'JFI302',
                text: {
                    summary: 'Joseph and Mary leave Nazareth to register in Bethlehem.',
                    scriptural: 'And Joseph also went up from Galilee, from the city of Nazareth, to Judea, to the city of David, which is called Bethlehem, because he was of the house and lineage of David'
                },
                link: {
                    label: 'Lk. 2:4',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A4&version=RSVCE',
                    tip: 'And Joseph also went up from Galilee, from the city of Nazareth, to Judea, to the city of David, which is called Bethlehem, because he was of the house and lineage of David'
                }
            },
            {
                id: 'JFI303',
                text: {
                    summary: 'There, Mary gives birth to the Son of God.',
                    scriptural: 'And she gave birth to her first-born son and wrapped him in swaddling cloths, and laid him in a manger, because there was no place for them in the inn.'
                },
                link: {
                    label: 'Lk. 2:7',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A7&version=RSVCE',
                    tip: 'And she gave birth to her first-born son and wrapped him in swaddling cloths, and laid him in a manger, because there was no place for them in the inn.'
                }
            },
            {
                id: 'JFI304',
                text: {
                    summary: 'Mary lays Him in a manger, because there is no room for Him in the inn.',
                    scriptural: 'And she gave birth to her first-born son and wrapped him in swaddling cloths, and laid him in a manger, because there was no place for them in the inn.'
                },
                link: {
                    label: 'Lk. 2:7',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A7&version=RSVCE',
                    tip: 'And she gave birth to her first-born son and wrapped him in swaddling cloths, and laid him in a manger, because there was no place for them in the inn.'
                }
            },
            {
                id: 'JFI305',
                text: {
                    summary: 'Angels announce to shepherds nearby: “The Savior is born.”',
                    scriptural: '[10] And the angel said to them, “Be not afraid; for behold, I bring you good news of a great joy which will come to all the people; [11] for to you is born this day in the city of David a Savior, who is Christ the Lord.'
                },
                link: {
                    label: 'Lk. 2:10-11',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A10-11&version=RSVCE',
                    tip: '[10] And the angel said to them, “Be not afraid; for behold, I bring you good news of a great joy which will come to all the people; [11] for to you is born this day in the city of David a Savior, who is Christ the Lord.'
                }
            },
            {
                id: 'JFI306',
                text: {
                    summary: 'Angels sing: “Peace to men of good will.”',
                    scriptural: '“Glory to God in the highest,\n' +
                        'and on earth peace among men with whom he is pleased!”'
                },
                link: {
                    label: 'Lk. 2:14',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A14&version=RSVCE',
                    tip: '“Glory to God in the highest,\n' +
                        'and on earth peace among men with whom he is pleased!”'
                }
            },
            {
                id: 'JFI307',
                text: {
                    summary: 'Wise men come from the East in search of Christ.',
                    scriptural: '[1] Now when Jesus was born in Bethlehem of Judea in the days of Herod the king, behold, wise men from the East came to Jerusalem, saying, [2] “Where is he who has been born king of the Jews? For we have seen his star in the East, and have come to worship him.”'
                },
                link: {
                    label: 'Mat. 2:1-2',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%202%3A1-2&version=RSVCE',
                    tip: '[1] Now when Jesus was born in Bethlehem of Judea in the days of Herod the king, behold, wise men from the East came to Jerusalem, saying, [2] “Where is he who has been born king of the Jews? For we have seen his star in the East, and have come to worship him.”'
                }
            },
            {
                id: 'JFI308',
                text: {
                    summary: 'Entering the house in Bethlehem, they worship Him.',
                    scriptural: 'and going into the house they saw the child with Mary his mother, and they fell down and worshiped him. Then, opening their treasures, they offered him gifts, gold and frankincense and myrrh.'
                },
                link: {
                    label: 'Mat. 2:11',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%202%3A11&version=RSVCE',
                    tip: 'and going into the house they saw the child with Mary his mother, and they fell down and worshiped him. Then, opening their treasures, they offered him gifts, gold and frankincense and myrrh.'
                }
            },
            {
                id: 'JFI309',
                text: {
                    summary: 'All nations serve Him.',
                    scriptural: 'May all kings fall down before him,\n' +
                        '    all nations serve him!'
                },
                link: {
                    label: 'Ps. 72:11',
                    url: 'https://www.biblegateway.com/passage/?search=Ps.%2072%3A11&version=RSVCE',
                    tip: 'May all kings fall down before him,\n' +
                        '    all nations serve him!'
                }
            },
            {
                id: 'JFI310',
                text: {
                    summary: 'Those who accept Christ become children of God.',
                    scriptural: 'But to all who received him, who believed in his name, he gave power to become children of God;'
                },
                link: {
                    label: 'Jn. 1:12',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%201%3A12&version=RSVCE',
                    tip: 'But to all who received him, who believed in his name, he gave power to become children of God;'
                }
            }
        ],
        fourth: [
            {
                id: 'JFI401',
                text: {
                    summary: 'When the Child Jesus is eight days old, He is circumcised.',
                    scriptural: 'And at the end of eight days, when he was circumcised, he was called Jesus, the name given by the angel before he was conceived in the womb.'
                },
                link: {
                    label: 'Lk. 2:21',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A21&version=RSVCE',
                    tip: 'And at the end of eight days, when he was circumcised, he was called Jesus, the name given by the angel before he was conceived in the womb.'
                }
            },
            {
                id: 'JFI402',
                text: {
                    summary: 'And his parents name Him Jesus.',
                    scriptural: 'And at the end of eight days, when he was circumcised, he was called Jesus, the name given by the angel before he was conceived in the womb.'
                },
                link: {
                    label: 'Lk. 2:21',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A21&version=RSVCE',
                    tip: 'And at the end of eight days, when he was circumcised, he was called Jesus, the name given by the angel before he was conceived in the womb.'
                }
            },
            {
                id: 'JFI403',
                text: {
                    summary: 'The name of Jesus is the only name by which we can be saved.',
                    scriptural: 'And there is salvation in no one else, for there is no other name under heaven given among men by which we must be saved.'
                },
                link: {
                    label: 'Acts 4:12',
                    url: 'https://www.biblegateway.com/passage/?search=Acts%204%3A12&version=RSVCE',
                    tip: 'And there is salvation in no one else, for there is no other name under heaven given among men by which we must be saved.'
                }
            },
            {
                id: 'JFI404',
                text: {
                    summary: '“Ask the Father anything in My Name. He will give it to you.”',
                    scriptural: 'In that day you will ask nothing of me. Truly, truly, I say to you, if you ask anything of the Father, he will give it to you in my name.'
                },
                link: {
                    label: 'Jn. 16:23',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%2016%3A23&version=RSVCE',
                    tip: 'In that day you will ask nothing of me. Truly, truly, I say to you, if you ask anything of the Father, he will give it to you in my name.'
                }
            },
            {
                id: 'JFI405',
                text: {
                    summary: 'Lord, You are good and forgiving to all who call upon Your Name.',
                    scriptural: 'For thou, O Lord, art good and forgiving,\n' +
                        '    abounding in steadfast love to all who call on thee.'
                },
                link: {
                    label: 'Ps. 86:5',
                    url: 'https://www.biblegateway.com/passage/?search=Ps.%2086%3A5&version=RSVCE',
                    tip: 'For thou, O Lord, art good and forgiving,\n' +
                        '    abounding in steadfast love to all who call on thee.'
                }
            },
            {
                id: 'JFI406',
                text: {
                    summary: 'Joseph and Mary take Jesus to Jerusalem to present Him to God.',
                    scriptural: 'And when the time came for their purification according to the law of Moses, they brought him up to Jerusalem to present him to the Lord'
                },
                link: {
                    label: 'Lk. 2:22',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A22&version=RSVCE',
                    tip: 'And when the time came for their purification according to the law of Moses, they brought him up to Jerusalem to present him to the Lord'
                }
            },
            {
                id: 'JFI407',
                text: {
                    summary: 'Simeon, a holy man, foretells: “This Child is destined for the fall and rise of many.”',
                    scriptural: 'and Simeon blessed them and said to Mary his mother,\n' +
                        '\n' +
                        '“Behold, this child is set for the fall and rising of many in Israel,\n' +
                        'and for a sign that is spoken against'
                },
                link: {
                    label: 'Lk. 2:34',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A34&version=RSVCE',
                    tip: 'and Simeon blessed them and said to Mary his mother,\n' +
                        '\n' +
                        '“Behold, this child is set for the fall and rising of many in Israel,\n' +
                        'and for a sign that is spoken against'
                }
            },
            {
                id: 'JFI408',
                text: {
                    summary: '“Your own soul a sword shall pierce.”',
                    scriptural: '(and a sword will pierce through your own soul also),\n' +
                        'that thoughts out of many hearts may be revealed.”'
                },
                link: {
                    label: 'Lk. 2:35',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A35&version=RSVCE',
                    tip: '(and a sword will pierce through your own soul also),\n' +
                        'that thoughts out of many hearts may be revealed.”'
                }
            },
            {
                id: 'JFI409',
                text: {
                    summary: 'Joseph and Mary take Jesus to their hometown of Nazareth.',
                    scriptural: 'And when they had performed everything according to the law of the Lord, they returned into Galilee, to their own city, Nazareth.'
                },
                link: {
                    label: 'Lk. 2:39',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A39&version=RSVCE',
                    tip: 'And when they had performed everything according to the law of the Lord, they returned into Galilee, to their own city, Nazareth.'
                }
            },
            {
                id: 'JFI410',
                text: {
                    summary: 'Whatever you do, do all in the Name of Jesus.',
                    scriptural: 'And whatever you do, in word or deed, do everything in the name of the Lord Jesus, giving thanks to God the Father through him.'
                },
                link: {
                    label: 'Col. 3:17',
                    url: 'https://www.biblegateway.com/passage/?search=Col.%203%3A17&version=RSVCE',
                    tip: 'And whatever you do, in word or deed, do everything in the name of the Lord Jesus, giving thanks to God the Father through him.'
                }
            }
        ],
        fifth: [
            {
                id: 'JFI501',
                text: {
                    summary: 'Jesus is twelve years old, and goes to Jerusalem with Mary and Joseph.',
                    scriptural: 'And when he was twelve years old, they went up according to custom;'
                },
                link: {
                    label: 'Lk. 2:42',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A42&version=RSVCE',
                    tip: 'And when he was twelve years old, they went up according to custom;'
                }
            },
            {
                id: 'JFI502',
                text: {
                    summary: 'Jesus remains in Jerusalem. His parents do not realize it.',
                    scriptural: 'and when the feast was ended, as they were returning, the boy Jesus stayed behind in Jerusalem. His parents did not know it'
                },
                link: {
                    label: 'Lk. 2:43',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A43&version=RSVCE',
                    tip: 'and when the feast was ended, as they were returning, the boy Jesus stayed behind in Jerusalem. His parents did not know it'
                }
            },
            {
                id: 'JFI503',
                text: {
                    summary: 'Mary and Joseph return looking for Him.',
                    scriptural: 'and when they did not find him, they returned to Jerusalem, seeking him.'
                },
                link: {
                    label: 'Lk. 2:45',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A45&version=RSVCE',
                    tip: 'and when they did not find him, they returned to Jerusalem, seeking him.'
                }
            },
            {
                id: 'JFI504',
                text: {
                    summary: 'They find Jesus in the temple.',
                    scriptural: 'After three days they found him in the temple, sitting among the teachers, listening to them and asking them questions;'
                },
                link: {
                    label: 'Lk. 2:46',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A46&version=RSVCE',
                    tip: 'After three days they found him in the temple, sitting among the teachers, listening to them and asking them questions;'
                }
            },
            {
                id: 'JFI505',
                text: {
                    summary: 'Jesus was fulfilling the will of His Father.',
                    scriptural: 'And he said to them, “How is it that you sought me? Did you not know that I must be in my Father’s house?”'
                },
                link: {
                    label: 'Lk. 2:49',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A49&version=RSVCE',
                    tip: 'And he said to them, “How is it that you sought me? Did you not know that I must be in my Father’s house?”'
                }
            },
            {
                id: 'JFI506',
                text: {
                    summary: 'The Holy Family returns to Nazareth.',
                    scriptural: 'And he went down with them and came to Nazareth, and was obedient to them; and his mother kept all these things in her heart.'
                },
                link: {
                    label: 'Lk. 2:51',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A51&version=RSVCE',
                    tip: 'And he went down with them and came to Nazareth, and was obedient to them; and his mother kept all these things in her heart.'
                }
            },
            {
                id: 'JFI507',
                text: {
                    summary: 'Jesus, the Son of God, obeys His parents.',
                    scriptural: 'And he went down with them and came to Nazareth, and was obedient to them; and his mother kept all these things in her heart.'
                },
                link: {
                    label: 'Lk. 2:51',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A51&version=RSVCE',
                    tip: 'And he went down with them and came to Nazareth, and was obedient to them; and his mother kept all these things in her heart.'
                }
            },
            {
                id: 'JFI508',
                text: {
                    summary: 'God tells us: Honor your father and your mother.',
                    scriptural: 'For God commanded, "Honor your father and your mother," and, "He who speaks evil of father or mother, let him surely die."'
                },
                link: {
                    label: 'Mat. 15:4',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%2015%3A4&version=RSVCE',
                    tip: 'For God commanded, "Honor your father and your mother," and, "He who speaks evil of father or mother, let him surely die."'
                }
            },
            {
                id: 'JFI509',
                text: {
                    summary: 'If you love Me, obey My commandments.',
                    scriptural: '“If you love me, you will keep my commandments.'
                },
                link: {
                    label: 'Jn. 14:15',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%2014%3A15&version=RSVCE',
                    tip: '“If you love me, you will keep my commandments.'
                }
            },
            {
                id: 'JFI510',
                text: {
                    summary: 'Let us love in thought, in word, and in action.',
                    scriptural: 'Little children, let us not love in word or speech but in deed and in truth.'
                },
                link: {
                    label: '1 John 3:18',
                    url: 'https://www.biblegateway.com/passage/?search=1%20John%203%3A18&version=RSVCE',
                    tip: 'Little children, let us not love in word or speech but in deed and in truth.'
                }
            }
        ]
    }

    const luminousInsights = {
        first: [
            {
                id: 'LFI101',
                text: {
                    summary: 'A voice cries out in the wilderness.',
                    scriptural: 'the voice of one crying in the wilderness:\n' +
                        'Prepare the way of the Lord,\n' +
                        'make his paths straight'
                },
                link: {
                    label: 'Mk. 1:3',
                    url: 'https://www.biblegateway.com/passage/?search=Mk.%201%3A3&version=RSVCE',
                    tip: 'the voice of one crying in the wilderness:\n' +
                        'Prepare the way of the Lord,\n' +
                        'make his paths straight'
                }
            },
            {
                id: 'LFI102',
                text: {
                    summary: 'John the Baptist preaches repentance.',
                    scriptural: '[1] In those days came John the Baptist, preaching in the wilderness of Judea, [2] “Repent, for the kingdom of heaven is at hand.”'
                },
                link: {
                    label: 'Mat. 3:1-2',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%203%3A1-2&version=RSVCE',
                    tip: '[1] In those days came John the Baptist, preaching in the wilderness of Judea, [2] “Repent, for the kingdom of heaven is at hand.”'
                }
            },
            {
                id: 'LFI103',
                text: {
                    summary: 'John proclaims that One is coming “the thong of whose sandals I am not worthy to unloose.”',
                    scriptural: 'And he preached, saying, “After me comes he who is mightier than I, the thong of whose sandals I am not worthy to stoop down and untie.'
                },
                link: {
                    label: 'Mk. 1:7',
                    url: 'https://www.biblegateway.com/passage/?search=Mk.%201%3A7&version=RSVCE',
                    tip: 'And he preached, saying, “After me comes he who is mightier than I, the thong of whose sandals I am not worthy to stoop down and untie.'
                }
            },
            {
                id: 'LFI104',
                text: {
                    summary: 'Jesus approaches John to be baptized.',
                    scriptural: 'Then Jesus came from Galilee to the Jordan to John, to be baptized by him.'
                },
                link: {
                    label: 'Mat. 3:13',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%203%3A13&version=RSVCE',
                    tip: 'Then Jesus came from Galilee to the Jordan to John, to be baptized by him.'
                }
            },
            {
                id: 'LFI105',
                text: {
                    summary: 'John protests that Jesus should be the one baptizing him instead.',
                    scriptural: 'John would have prevented him, saying, “I need to be baptized by you, and do you come to me?”'
                },
                link: {
                    label: 'Mat. 3:14',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%203%3A14&version=RSVCE',
                    tip: 'John would have prevented him, saying, “I need to be baptized by you, and do you come to me?”'
                }
            },
            {
                id: 'LFI106',
                text: {
                    summary: 'Jesus answers that it must be so for now.',
                    scriptural: 'But Jesus answered him, “Let it be so now; for thus it is fitting for us to fulfil all righteousness.” Then he consented.'
                },
                link: {
                    label: 'Mat. 3:15',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%203%3A15&version=RSVCE',
                    tip: 'But Jesus answered him, “Let it be so now; for thus it is fitting for us to fulfil all righteousness.” Then he consented.'
                }
            },
            {
                id: 'LFI107',
                text: {
                    summary: 'The heavens open; the Spirit descends.',
                    scriptural: 'And when Jesus was baptized, he went up immediately from the water, and behold, the heavens were opened and he saw the Spirit of God descending like a dove, and alighting on him;'
                },
                link: {
                    label: 'Mat. 3:16',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%203%3A16&version=RSVCE',
                    tip: 'And when Jesus was baptized, he went up immediately from the water, and behold, the heavens were opened and he saw the Spirit of God descending like a dove, and alighting on him;'
                }
            },
            {
                id: 'LFI108',
                text: {
                    summary: 'A voice from heaven says, “This is my beloved Son, in whom I am well pleased.”',
                    scriptural: 'and lo, a voice from heaven, saying, “This is my beloved Son, with whom I am well pleased.”'
                },
                link: {
                    label: 'Mat. 3:17',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%203%3A17&version=RSVCE',
                    tip: 'and lo, a voice from heaven, saying, “This is my beloved Son, with whom I am well pleased.”'
                }
            },
            {
                id: 'LFI109',
                text: {
                    summary: 'There is One Lord, One Faith, One Baptism.',
                    scriptural: 'one Lord, one faith, one baptism,'
                },
                link: {
                    label: 'Eph. 4:5',
                    url: 'https://www.biblegateway.com/passage/?search=Eph.%204%3A5&version=RSVCE',
                    tip: 'one Lord, one faith, one baptism,'
                }
            },
            {
                id: 'LFI110',
                text: {
                    summary: 'We were baptized into His death in order to be raised to new life in Him.',
                    scriptural: 'We were buried therefore with him by baptism into death, so that as Christ was raised from the dead by the glory of the Father, we too might walk in newness of life.'
                },
                link: {
                    label: 'Rm. 6:4',
                    url: 'https://www.biblegateway.com/passage/?search=Rm.%206%3A4&version=RSVCE',
                    tip: 'We were buried therefore with him by baptism into death, so that as Christ was raised from the dead by the glory of the Father, we too might walk in newness of life.'
                }
            },
        ],
        second: [
            {
                id: 'LFI201',
                text: {
                    summary: 'There was a marriage in Cana in Galilee.',
                    scriptural: 'On the third day there was a marriage at Cana in Galilee, and the mother of Jesus was there;'
                },
                link: {
                    label: 'Jn. 2:1',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%202%3A1&version=RSVCE',
                    tip: 'On the third day there was a marriage at Cana in Galilee, and the mother of Jesus was there;'
                }
            },
            {
                id: 'LFI202',
                text: {
                    summary: 'The wine runs out. Mary intercedes.',
                    scriptural: 'When the wine failed, the mother of Jesus said to him, “They have no wine.”'
                },
                link: {
                    label: 'Jn. 2:3',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%202%3A3&version=RSVCE',
                    tip: 'When the wine failed, the mother of Jesus said to him, “They have no wine.”'
                }
            },
            {
                id: 'LFI203',
                text: {
                    summary: 'Jesus replies that His hour has not yet come.',
                    scriptural: 'And Jesus said to her, “O woman, what have you to do with me? My hour has not yet come.”'
                },
                link: {
                    label: 'Jn. 2:4',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%202%3A4&version=RSVCE',
                    tip: 'And Jesus said to her, “O woman, what have you to do with me? My hour has not yet come.”'
                }
            },
            {
                id: 'LFI204',
                text: {
                    summary: 'Mary tells the servants to do whatever He asks.',
                    scriptural: 'His mother said to the servants, “Do whatever he tells you.”'
                },
                link: {
                    label: 'Jn. 2:5',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%202%3A5&version=RSVCE',
                    tip: 'His mother said to the servants, “Do whatever he tells you.”'
                }
            },
            {
                id: 'LFI205',
                text: {
                    summary: 'Jesus asks the jars of water be filled.',
                    scriptural: 'Now six stone jars were standing there, for the Jewish rites of purification, each holding twenty or thirty gallons.'
                },
                link: {
                    label: 'Jn. 2:6',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%202%3A6&version=RSVCE',
                    tip: 'Now six stone jars were standing there, for the Jewish rites of purification, each holding twenty or thirty gallons.'
                }
            },
            {
                id: 'LFI206',
                text: {
                    summary: 'The steward marvels that the best wine has been served last.',
                    scriptural: 'and said to him, “Every man serves the good wine first; and when men have drunk freely, then the poor wine; but you have kept the good wine until now.”'
                },
                link: {
                    label: 'Jn. 2:10',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%202%3A10&version=RSVCE',
                    tip: 'and said to him, “Every man serves the good wine first; and when men have drunk freely, then the poor wine; but you have kept the good wine until now.”'
                }
            },
            {
                id: 'LFI207',
                text: {
                    summary: 'This was the first of His signs.',
                    scriptural: 'This, the first of his signs, Jesus did at Cana in Galilee, and manifested his glory; and his disciples believed in him.'
                },
                link: {
                    label: 'Jn. 2:11',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%202%3A11&version=RSVCE',
                    tip: 'This, the first of his signs, Jesus did at Cana in Galilee, and manifested his glory; and his disciples believed in him.'
                }
            },
            {
                id: 'LFI208',
                text: {
                    summary: '“I will espouse thee to Me in faith.”',
                    scriptural: 'I will betroth you to me in faithfulness; and you shall know the Lord.'
                },
                link: {
                    label: 'Hos. 2:20',
                    url: 'https://www.biblegateway.com/passage/?search=Hos.%202%3A20&version=RSVCE',
                    tip: 'I will betroth you to me in faithfulness; and you shall know the Lord.'
                }
            },
            {
                id: 'LFI209',
                text: {
                    summary: '“Husbands, love your wives, as Christ also loved the Church”',
                    scriptural: 'Husbands, love your wives, as Christ loved the church and gave himself up for her,...'
                },
                link: {
                    label: 'Eph. 5:25',
                    url: 'https://www.biblegateway.com/passage/?search=Eph.%205%3A25&version=RSVCE',
                    tip: 'Husbands, love your wives, as Christ loved the church and gave himself up for her,...'
                }
            },
            {
                id: 'LFI210',
                text: {
                    summary: '“Blessed are they that are called to the marriage supper of the Lamb.”',
                    scriptural: 'And the angel said to me, “Write this: Blessed are those who are invited to the marriage supper of the Lamb.” And he said to me, “These are true words of God.”'
                },
                link: {
                    label: 'Rev. 19:9',
                    url: 'https://www.biblegateway.com/passage/?search=Rev.%2019%3A9&version=RSVCE',
                    tip: 'And the angel said to me, “Write this: Blessed are those who are invited to the marriage supper of the Lamb.” And he said to me, “These are true words of God.”'
                }
            },
        ],
        third: [
            {
                id: 'LFI301',
                text: {
                    summary: 'Jesus proclaims, “The Kingdom of God is at hand: repent, and believe the Gospel.”',
                    scriptural: 'and saying, “The time is fulfilled, and the kingdom of God is at hand; repent, and believe in the gospel.”'
                },
                link: {
                    label: 'Mk. 1:15',
                    url: 'https://www.biblegateway.com/passage/?search=Mk.%201%3A15&version=RSVCE',
                    tip: 'and saying, “The time is fulfilled, and the kingdom of God is at hand; repent, and believe in the gospel.”'
                }
            },
            {
                id: 'LFI302',
                text: {
                    summary: 'Jesus preaches the Kingdom in Galilee.',
                    scriptural: 'And he went about all Galilee, teaching in their synagogues and preaching the gospel of the kingdom and healing every disease and every infirmity among the people.'
                },
                link: {
                    label: 'Mat. 4:23',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%204%3A23&version=RSVCE',
                    tip: 'And he went about all Galilee, teaching in their synagogues and preaching the gospel of the kingdom and healing every disease and every infirmity among the people.'
                }
            },
            {
                id: 'LFI303',
                text: {
                    summary: 'Jesus teaches the Beatitudes to the crowds.',
                    scriptural: '[1] Seeing the crowds, he went up on the mountain, and when he sat down his disciples came to him. [2] And he opened his mouth and taught them'
                },
                link: {
                    label: 'Mat. 5:1-12',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%205%3A1-12&version=RSVCE',
                    tip: '[1] Seeing the crowds, he went up on the mountain, and when he sat down his disciples came to him. [2] And he opened his mouth and taught them'
                }
            },
            {
                id: 'LFI304',
                text: {
                    summary: 'Jesus commands His believers to be salt of the earth and the light of the world.',
                    scriptural: '“You are the salt of the earth; but if salt has lost its taste, how shall its saltness be restored?..."'
                },
                link: {
                    label: 'Mat. 5:13-16',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%205%3A13-16&version=RSVCE',
                    tip: '“You are the salt of the earth; but if salt has lost its taste, how shall its saltness be restored?..."'
                }
            },
            {
                id: 'LFI305',
                text: {
                    summary: 'It is not enough to say “Lord, Lord,” but one must do the will of the Father.',
                    scriptural: '“Not every one who says to me, ‘Lord, Lord,’ shall enter the kingdom of heaven, but he who does the will of my Father who is in heaven.'
                },
                link: {
                    label: 'Mat. 7:21-23',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%207%3A21-23&version=RSVCE',
                    tip: '“Not every one who says to me, ‘Lord, Lord,’ shall enter the kingdom of heaven, but he who does the will of my Father who is in heaven.'
                }
            },
            {
                id: 'LFI306',
                text: {
                    summary: 'Jesus sends His disciples to preach and say, “The kingdom of heaven is at hand.”',
                    scriptural: 'And preach as you go, saying, "The kingdom of heaven is at hand."'
                },
                link: {
                    label: 'Mat. 10:7',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%2010%3A7&version=RSVCE',
                    tip: 'And preach as you go, saying, "The kingdom of heaven is at hand."'
                }
            },
            {
                id: 'LFI307',
                text: {
                    summary: '“To other cities also I must preach the kingdom of God: for therefore am I sent.”',
                    scriptural: 'but he said to them, “I must preach the good news of the kingdom of God to the other cities also; for I was sent for this purpose.”'
                },
                link: {
                    label: 'Lk. 4:43',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%204%3A43&version=RSVCE',
                    tip: 'but he said to them, “I must preach the good news of the kingdom of God to the other cities also; for I was sent for this purpose.”'
                }
            },
            {
                id: 'LFI308',
                text: {
                    summary: 'If we do not receive the kingdom of God like a little child, neither shall we enter it.',
                    scriptural: 'Truly, I say to you, whoever does not receive the kingdom of God like a child shall not enter it.”'
                },
                link: {
                    label: 'Mk. 10:15',
                    url: 'https://www.biblegateway.com/passage/?search=Mk.%2010%3A15&version=RSVCE',
                    tip: 'Truly, I say to you, whoever does not receive the kingdom of God like a child shall not enter it.”'
                }
            },
            {
                id: 'LFI309',
                text: {
                    summary: 'Jesus sends the disciples out to preach the kingdom and heal the sick.',
                    scriptural: 'and he sent them out to preach the kingdom of God and to heal.'
                },
                link: {
                    label: 'Lk. 9:2',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%209%3A2&version=RSVCE',
                    tip: 'and he sent them out to preach the kingdom of God and to heal.'
                }
            },
            {
                id: 'LFI310',
                text: {
                    summary: 'The Apostles preach the Risen Christ.',
                    scriptural: 'This Jesus God raised up, and of that we all are witnesses.'
                },
                link: {
                    label: 'Acts 2:32',
                    url: 'https://www.biblegateway.com/passage/?search=Acts%202%3A32&version=RSVCE',
                    tip: 'This Jesus God raised up, and of that we all are witnesses.'
                }
            },
        ],
        fourth: [
            {
                id: 'LFI401',
                text: {
                    summary: 'Jesus takes Peter, James, and John up to a high mountain by themselves.',
                    scriptural: 'And after six days Jesus took with him Peter and James and John his brother, and led them up a high mountain apart.'
                },
                link: {
                    label: 'Mat. 17:1',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%2017%3A1&version=RSVCE',
                    tip: 'And after six days Jesus took with him Peter and James and John his brother, and led them up a high mountain apart.'
                }
            },
            {
                id: 'LFI402',
                text: {
                    summary: 'He is transfigured before them; His face shines like the sun, and His garments shine like light.',
                    scriptural: 'And he was transfigured before them, and his face shone like the sun, and his garments became white as light.'
                },
                link: {
                    label: 'Mat. 17:2',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%2017%3A2&version=RSVCE',
                    tip: 'And he was transfigured before them, and his face shone like the sun, and his garments became white as light.'
                }
            },
            {
                id: 'LFI403',
                text: {
                    summary: 'Suddenly, Moses and Elijah appear.',
                    scriptural: 'And there appeared to them Eli′jah with Moses; and they were talking to Jesus.'
                },
                link: {
                    label: 'Mk. 9:4',
                    url: 'https://www.biblegateway.com/passage/?search=Mk.%209%3A4&version=RSVCE',
                    tip: 'And there appeared to them Eli′jah with Moses; and they were talking to Jesus.'
                }
            },
            {
                id: 'LFI404',
                text: {
                    summary: 'Peter asks to build three tents.',
                    scriptural: 'And Peter said to Jesus, “Lord, it is well that we are here; if you wish, I will make three booths here, one for you and one for Moses and one for Eli′jah.”'
                },
                link: {
                    label: 'Mat. 17:4',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%2017%3A4&version=RSVCE',
                    tip: 'And Peter said to Jesus, “Lord, it is well that we are here; if you wish, I will make three booths here, one for you and one for Moses and one for Eli′jah.”'
                }
            },
            {
                id: 'LFI405',
                text: {
                    summary: 'As Peter speaks, a cloud descends over them, and the apostles become afraid.',
                    scriptural: 'As he said this, a cloud came and overshadowed them; and they were afraid as they entered the cloud.'
                },
                link: {
                    label: 'Luke 9:34',
                    url: 'https://www.biblegateway.com/passage/?search=Luke%209%3A34&version=RSVCE',
                    tip: 'As he said this, a cloud came and overshadowed them; and they were afraid as they entered the cloud.'
                }
            },
            {
                id: 'LFI406',
                text: {
                    summary: 'A voice proclaims of Jesus: “This is My beloved Son, in whom I am well pleased. Listen to Him.”',
                    scriptural: 'He was still speaking, when lo, a bright cloud overshadowed them, and a voice from the cloud said, “This is my beloved Son, with whom I am well pleased; listen to him.”'
                },
                link: {
                    label: 'Mat. 17:5',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%2017%3A5&version=RSVCE',
                    tip: 'He was still speaking, when lo, a bright cloud overshadowed them, and a voice from the cloud said, “This is my beloved Son, with whom I am well pleased; listen to him.”'
                }
            },
            {
                id: 'LFI407',
                text: {
                    summary: 'The disciples become utterly terrified.',
                    scriptural: 'When the disciples heard this, they fell on their faces, and were filled with awe.'
                },
                link: {
                    label: 'Mat. 17:6',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%2017%3A6&version=RSVCE',
                    tip: 'When the disciples heard this, they fell on their faces, and were filled with awe.'
                }
            },
            {
                id: 'LFI408',
                text: {
                    summary: 'Jesus tells His disciples to rise, and to not be afraid.',
                    scriptural: 'But Jesus came and touched them, saying, “Rise, and have no fear.”'
                },
                link: {
                    label: 'Mat. 17:7',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%2017%3A7&version=RSVCE',
                    tip: 'But Jesus came and touched them, saying, “Rise, and have no fear.”'
                }
            },
            {
                id: 'LFI409',
                text: {
                    summary: 'As we share in Christ’s sufferings, so shall we share in His glory.',
                    scriptural: 'But rejoice in so far as you share Christ’s sufferings, that you may also rejoice and be glad when his glory is revealed.'
                },
                link: {
                    label: '1 Peter 4:13-16',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%2017%3A7&version=RSVCE',
                    tip: 'But rejoice in so far as you share Christ’s sufferings, that you may also rejoice and be glad when his glory is revealed.'
                }
            },
            {
                id: 'LFI410',
                text: {
                    summary: 'The disciples rejoice to be found worthy to suffer for the sake of His name.',
                    scriptural: 'Then they left the presence of the council, rejoicing that they were counted worthy to suffer dishonor for the name.'
                },
                link: {
                    label: 'Acts 5:41',
                    url: 'https://www.biblegateway.com/passage/?search=Acts%205%3A41&version=RSVCE',
                    tip: 'Then they left the presence of the council, rejoicing that they were counted worthy to suffer dishonor for the name.'
                }
            }
        ],
        fifth: [
            {
                id: 'LFI501',
                text: {
                    summary: 'The Feast of Unleavened Bread, also called the Passover, drew near.',
                    scriptural: 'Now the feast of Unleavened Bread drew near, which is called the Passover.'
                },
                link: {
                    label: 'Lk. 22:1',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%2022%3A1&version=RSVCE',
                    tip: 'Now the feast of Unleavened Bread drew near, which is called the Passover.'
                }
            },
            {
                id: 'LFI502',
                text: {
                    summary: 'Jesus sends His disciples to make preparations for the Passover.',
                    scriptural: 'He said, “Go into the city to such a one, and say to him, ‘The Teacher says, My time is at hand; I will keep the passover at your house with my disciples.’”'
                },
                link: {
                    label: 'Mat. 26:17-18',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%2026%3A17-18&version=RSVCE',
                    tip: 'He said, “Go into the city to such a one, and say to him, ‘The Teacher says, My time is at hand; I will keep the passover at your house with my disciples.’”'
                }
            },
            {
                id: 'LFI503',
                text: {
                    summary: 'When evening arrives, Jesus reclines at table with them.',
                    scriptural: 'When it was evening, he sat at table with the twelve disciples;'
                },
                link: {
                    label: 'Mat. 26:19-20',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%2026%3A19-20&version=RSVCE',
                    tip: 'When it was evening, he sat at table with the twelve disciples;'
                }
            },
            {
                id: 'LFI504',
                text: {
                    summary: 'Jesus tells the disciples that He will not share in the Passover again until all is fulfilled.',
                    scriptural: 'for I tell you I shall not eat it until it is fulfilled in the kingdom of God.'
                },
                link: {
                    label: 'Lk. 22:16',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%2022%3A16&version=RSVCE',
                    tip: 'for I tell you I shall not eat it until it is fulfilled in the kingdom of God.'
                }
            },
            {
                id: 'LFI505',
                text: {
                    summary: 'Our Lord washes the feet of His disciples.',
                    scriptural: 'Then he poured water into a basin, and began to wash the disciples’ feet, and to wipe them with the towel with which he was girded.'
                },
                link: {
                    label: 'Jn. 13:5-6',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%2013%3A5-6&version=RSVCE',
                    tip: 'Then he poured water into a basin, and began to wash the disciples’ feet, and to wipe them with the towel with which he was girded.'
                }
            },
            {
                id: 'LFI506',
                text: {
                    summary: 'Jesus took the bread, broke it, and gave it to His disciples, saying “This is My Body.”',
                    scriptural: 'And he took bread, and when he had given thanks he broke it and gave it to them, saying, “This is my body which is given for you. Do this in remembrance of me.”'
                },
                link: {
                    label: 'Lk. 22:19',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%2022%3A19&version=RSVCE',
                    tip: 'And he took bread, and when he had given thanks he broke it and gave it to them, saying, “This is my body which is given for you. Do this in remembrance of me.”'
                }
            },
            {
                id: 'LFI507',
                text: {
                    summary: 'In a similar way, He took the chalice and said, “This is My Blood.”',
                    scriptural: 'And likewise the cup after supper, saying, “This cup which is poured out for you is the new covenant in my blood.'
                },
                link: {
                    label: 'Lk. 22:20',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%2022%3A20&version=RSVCE',
                    tip: 'And likewise the cup after supper, saying, “This cup which is poured out for you is the new covenant in my blood.'
                }
            },
            {
                id: 'LFI508',
                text: {
                    summary: '“Amen, amen, I say unto you: Except that you eat of the flesh of the Son of Man, and drink His blood, you shall not have life in you.”',
                    scriptural: 'So Jesus said to them, “Truly, truly, I say to you, unless you eat the flesh of the Son of man and drink his blood, you have no life in you;'
                },
                link: {
                    label: 'Jn. 6:53',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%206%3A53&version=RSVCE',
                    tip: 'So Jesus said to them, “Truly, truly, I say to you, unless you eat the flesh of the Son of man and drink his blood, you have no life in you;'
                }
            },
            {
                id: 'LFI509',
                text: {
                    summary: 'For the chalice and bread is a communion in the blood and body of the Lord.',
                    scriptural: 'The cup of blessing which we bless, is it not a participation in the blood of Christ? The bread which we break, is it not a participation in the body of Christ?'
                },
                link: {
                    label: '1 Cor. 10:16',
                    url: 'https://www.biblegateway.com/passage/?search=1%20Cor.%2010%3A16&version=RSVCE',
                    tip: 'The cup of blessing which we bless, is it not a participation in the blood of Christ? The bread which we break, is it not a participation in the body of Christ?'
                }
            },
            {
                id: 'LFI510',
                text: {
                    summary: 'When we eat this bread, and drink this cup, we proclaim His death, until He comes.',
                    scriptural: 'For as often as you eat this bread and drink the cup, you proclaim the Lord’s death until he comes.'
                },
                link: {
                    label: '1 Cor. 11:26',
                    url: 'https://www.biblegateway.com/passage/?search=1%20Cor.%2011%3A26&version=RSVCE',
                    tip: 'For as often as you eat this bread and drink the cup, you proclaim the Lord’s death until he comes.'
                }
            }
        ]
    }

    const sorrowfulInsights = {
        first: [
            {
                id: 'SFI101',
                text: {
                    summary: 'Jesus and His Apostles go to Gethsemane to pray.',
                    scriptural: 'Then Jesus went with them to a place called Gethsem′ane, and he said to his disciples, “Sit here, while I go yonder and pray.”'
                },
                link: {
                    label: 'Mat. 26:36',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%2026%3A36&version=RSVCE',
                    tip: 'Then Jesus went with them to a place called Gethsem′ane, and he said to his disciples, “Sit here, while I go yonder and pray.”'
                }
            },
            {
                id: 'SFI102',
                text: {
                    summary: 'With Peter, James and John, He enters the olive grove.',
                    scriptural: 'And taking with him Peter and the two sons of Zeb′edee, he began to be sorrowful and troubled.'
                },
                link: {
                    label: 'Mat. 26:37',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%2026%3A37&version=RSVCE',
                    tip: 'And taking with him Peter and the two sons of Zeb′edee, he began to be sorrowful and troubled.'
                }
            },
            {
                id: 'SFI103',
                text: {
                    summary: '“My soul is sorrowful unto death.”',
                    scriptural: 'Then he said to them, “My soul is very sorrowful, even to death; remain here, and watch with me.”'
                },
                link: {
                    label: 'Mat. 26:38',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%2026%3A38&version=RSVCE',
                    tip: 'Then he said to them, “My soul is very sorrowful, even to death; remain here, and watch with me.”'
                }
            },
            {
                id: 'SFI104',
                text: {
                    summary: '“Father, if it be Thy will, let this cup pass from Me.”',
                    scriptural: 'And going a little farther he fell on his face and prayed, “My Father, if it be possible, let this cup pass from me; ...”'
                },
                link: {
                    label: 'Mat. 26:39',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%2026%3A39&version=RSVCE',
                    tip: 'And going a little farther he fell on his face and prayed, “My Father, if it be possible, let this cup pass from me; ...”'
                }
            },
            {
                id: 'SFI105',
                text: {
                    summary: '“Yet, not My will, but Thine be done.”',
                    scriptural: '"...nevertheless, not as I will, but as thou wilt.”'
                },
                link: {
                    label: 'Mat. 26:39',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%2026%3A39&version=RSVCE',
                    tip: '"...nevertheless, not as I will, but as thou wilt.”'
                }
            },
            {
                id: 'SFI106',
                text: {
                    summary: '“Could you not watch one hour with Me?”',
                    scriptural: 'And he came to the disciples and found them sleeping; and he said to Peter, “So, could you not watch with me one hour?'
                },
                link: {
                    label: 'Mat. 26:40',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%2026%3A40&version=RSVCE',
                    tip: 'And he came to the disciples and found them sleeping; and he said to Peter, “So, could you not watch with me one hour?'
                }
            },
            {
                id: 'SFI107',
                text: {
                    summary: '“Watch and pray that you enter not into temptation.”',
                    scriptural: 'Watch and pray that you may not enter into temptation; the spirit indeed is willing, but the flesh is weak.”'
                },
                link: {
                    label: 'Mat. 26:41',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%2026%3A41&version=RSVCE',
                    tip: 'Watch and pray that you may not enter into temptation; the spirit indeed is willing, but the flesh is weak.”'
                }
            },
            {
                id: 'SFI108',
                text: {
                    summary: 'Judas betrays Jesus with a kiss.',
                    scriptural: 'Now the betrayer had given them a sign, saying, “The one I shall kiss is the man; seize him.”'
                },
                link: {
                    label: 'Mat. 26:48',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%2026%3A48&version=RSVCE',
                    tip: 'Now the betrayer had given them a sign, saying, “The one I shall kiss is the man; seize him.”'
                }
            },
            {
                id: 'SFI109',
                text: {
                    summary: '“Having seized Jesus, they led Him away to the high priest’s house.”',
                    scriptural: 'Then they seized him and led him away, bringing him into the high priest’s house. Peter followed at a distance;'
                },
                link: {
                    label: 'Lk. 22:54',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%2022%3A54&version=RSVCE',
                    tip: 'Then they seized him and led him away, bringing him into the high priest’s house. Peter followed at a distance;'
                }
            },
            {
                id: 'SFI110',
                text: {
                    summary: 'His disciples abandon Him.',
                    scriptural: 'But all this has taken place, that the scriptures of the prophets might be fulfilled.” Then all the disciples forsook him and fled.'
                },
                link: {
                    label: 'Mat. 26:56',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%2026%3A56&version=RSVCE',
                    tip: 'But all this has taken place, that the scriptures of the prophets might be fulfilled.” Then all the disciples forsook him and fled.'
                }
            },
        ],
        second: [
            {
                id: 'SFI201',
                text: {
                    summary: 'Before the high priest Annas, one of the guards strikes Jesus in the face.',
                    scriptural: 'When he had said this, one of the officers standing by struck Jesus with his hand, saying, “Is that how you answer the high priest?”'
                },
                link: {
                    label: 'Jn. 18:22',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%2018%3A22&version=RSVCE',
                    tip: 'When he had said this, one of the officers standing by struck Jesus with his hand, saying, “Is that how you answer the high priest?”'
                }
            },
            {
                id: 'SFI202',
                text: {
                    summary: 'Annas sends Jesus, bound, to the high priest Caiphas.',
                    scriptural: 'Annas then sent him bound to Ca′iaphas the high priest.'
                },
                link: {
                    label: 'Jn. 18:24',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%2018%3A24&version=RSVCE',
                    tip: 'Annas then sent him bound to Ca′iaphas the high priest.'
                }
            },
            {
                id: 'SFI203',
                text: {
                    summary: 'They sought false witnesses against Jesus that they might put Him to death.',
                    scriptural: 'Now the chief priests and the whole council sought false testimony against Jesus that they might put him to death,'
                },
                link: {
                    label: 'Mat. 26:59',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%2026%3A59&version=RSVCE',
                    tip: 'Now the chief priests and the whole council sought false testimony against Jesus that they might put him to death,'
                }
            },
            {
                id: 'SFI204',
                text: {
                    summary: 'Peter denies three times that he is a disciple of Jesus.',
                    scriptural: 'Peter again denied it; and at once the cock crowed.'
                },
                link: {
                    label: 'Jn. 18:17,25,27',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%2018%3A17%2C25%2C27&version=RSVCE',
                    tip: 'Peter again denied it; and at once the cock crowed.'
                }
            },
            {
                id: 'SFI205',
                text: {
                    summary: 'Jesus is brought before Pilate, for only he can issue a death sentence.',
                    scriptural: 'Pilate said to them, “Take him yourselves and judge him by your own law.” The Jews said to him, “It is not lawful for us to put any man to death.”'
                },
                link: {
                    label: 'Jn. 18:31',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%2018%3A31&version=RSVCE',
                    tip: 'Pilate said to them, “Take him yourselves and judge him by your own law.” The Jews said to him, “It is not lawful for us to put any man to death.”'
                }
            },
            {
                id: 'SFI206',
                text: {
                    summary: 'Pilate can find no guilt in Jesus.',
                    scriptural: 'But you have a custom that I should release one man for you at the Passover; will you have me release for you the King of the Jews?”'
                },
                link: {
                    label: 'Jn. 18:31',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%2018%3A39&version=RSVCE',
                    tip: 'But you have a custom that I should release one man for you at the Passover; will you have me release for you the King of the Jews?”'
                }
            },
            {
                id: 'SFI207',
                text: {
                    summary: 'To appease the Jews, Pilate has Jesus scourged.',
                    scriptural: 'Then Pilate took Jesus and scourged him.'
                },
                link: {
                    label: 'Jn. 19:1',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%2019%3A1&version=RSVCE',
                    tip: 'Then Pilate took Jesus and scourged him.'
                }
            },
            {
                id: 'SFI208',
                text: {
                    summary: '“It was our infirmities that He bore, our sufferings that He endured.”',
                    scriptural: 'Surely he has borne our griefs\n' +
                        '    and carried our sorrows;\n' +
                        'yet we esteemed him stricken,\n' +
                        '    smitten by God, and afflicted.'
                },
                link: {
                    label: 'Isaiah 53:4',
                    url: 'https://www.biblegateway.com/passage/?search=Isaiah%2053%3A4&version=RSVCE',
                    tip: 'Surely he has borne our griefs\n' +
                        '    and carried our sorrows;\n' +
                        'yet we esteemed him stricken,\n' +
                        '    smitten by God, and afflicted.'
                }
            },
            {
                id: 'SFI209',
                text: {
                    summary: '“He was pierced for our offenses, crushed for our sins.”',
                    scriptural: 'But he was wounded for our transgressions, he was bruised for our iniquities;'
                },
                link: {
                    label: 'Isaiah 53:5',
                    url: 'https://www.biblegateway.com/passage/?search=Isaiah%2053%3A5&version=RSVCE',
                    tip: 'But he was wounded for our transgressions, he was bruised for our iniquities;'
                }
            },
            {
                id: 'SFI210',
                text: {
                    summary: '“By His stripes we were healed.”',
                    scriptural: 'upon him was the chastisement that made us whole, and with his stripes we are healed.'
                },
                link: {
                    label: 'Isaiah 53:5',
                    url: 'https://www.biblegateway.com/passage/?search=Isaiah%2053%3A5&version=RSVCE',
                    tip: 'upon him was the chastisement that made us whole, and with his stripes we are healed.'
                }
            }
        ],
        third: [
            {
                id: 'SFI301',
                text: {
                    summary: 'Jesus answers Pilate that He is a king, but His kingdom is not of this world.',
                    scriptural: 'Jesus answered, “My kingship is not of this world; if my kingship were of this world, my servants would fight, that I might not be handed over to the Jews; but my kingship is not from the world.”'
                },
                link: {
                    label: 'Jn. 18:36',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%2018%3A36&version=RSVCE',
                    tip: 'Jesus answered, “My kingship is not of this world; if my kingship were of this world, my servants would fight, that I might not be handed over to the Jews; but my kingship is not from the world.”'
                }
            },
            {
                id: 'SFI302',
                text: {
                    summary: 'In mockery the soldiers place a crown of thorns on His head.',
                    scriptural: 'and plaiting a crown of thorns they put it on his head'
                },
                link: {
                    label: 'Mat. 27:29',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%2027%3A29&version=RSVCE',
                    tip: 'and plaiting a crown of thorns they put it on his head'
                }
            },
            {
                id: 'SFI303',
                text: {
                    summary: 'They put a reed in His right hand, a symbol of authority.',
                    scriptural: 'and put a reed in his right hand.'
                },
                link: {
                    label: 'Mat. 27:29',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%2027%3A29&version=RSVCE',
                    tip: 'and put a reed in his right hand.'
                }
            },
            {
                id: 'SFI304',
                text: {
                    summary: 'They kneel before Him in derision: “Hail, King of the Jews.”',
                    scriptural: 'And kneeling before him they mocked him, saying, “Hail, King of the Jews!”'
                },
                link: {
                    label: 'Mat. 27:29',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%2027%3A29&version=RSVCE',
                    tip: 'And kneeling before him they mocked him, saying, “Hail, King of the Jews!”'
                }
            },
            {
                id: 'SFI305',
                text: {
                    summary: 'They spit on Him and taking the reed, strike Him on the head.',
                    scriptural: 'And they spat upon him, and took the reed and struck him on the head.'
                },
                link: {
                    label: 'Mat. 27:30',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%2027%3A30&version=RSVCE',
                    tip: 'And they spat upon him, and took the reed and struck him on the head.'
                }
            },
            {
                id: 'SFI306',
                text: {
                    summary: 'Pilate presents Jesus to the crowd and says “Behold the Man.”',
                    scriptural: 'So Jesus came out, wearing the crown of thorns and the purple robe. Pilate said to them, “Here is the man!”'
                },
                link: {
                    label: 'Jn. 19:5',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%2019%3A5&version=RSVCE',
                    tip: 'So Jesus came out, wearing the crown of thorns and the purple robe. Pilate said to them, “Here is the man!”'
                }
            },
            {
                id: 'SFI307',
                text: {
                    summary: 'The crowd shouts: “Crucify Him! Crucify Him!”',
                    scriptural: 'When the chief priests and the officers saw him, they cried out, “Crucify him, crucify him!” Pilate said to them, “Take him yourselves and crucify him, for I find no crime in him.”'
                },
                link: {
                    label: 'Jn. 19:6',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%2019%3A6&version=RSVCE',
                    tip: 'When the chief priests and the officers saw him, they cried out, “Crucify him, crucify him!” Pilate said to them, “Take him yourselves and crucify him, for I find no crime in him.”'
                }
            },
            {
                id: 'SFI308',
                text: {
                    summary: 'Pilate asks: “Shall I crucify your King?”',
                    scriptural: 'They cried out, “Away with him, away with him, crucify him!” Pilate said to them, “Shall I crucify your King?”'
                },
                link: {
                    label: 'Jn. 19:15',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%2019%3A15&version=RSVCE',
                    tip: 'They cried out, “Away with him, away with him, crucify him!” Pilate said to them, “Shall I crucify your King?”'
                }
            },
            {
                id: 'SFI309',
                text: {
                    summary: 'They respond: “We have no king but Caesar.”',
                    scriptural: 'The chief priests answered, “We have no king but Caesar.”'
                },
                link: {
                    label: 'Jn. 19:15',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%2019%3A15&version=RSVCE',
                    tip: 'The chief priests answered, “We have no king but Caesar.”'
                }
            },
            {
                id: 'SFI310',
                text: {
                    summary: '“Though He was harshly treated, He submitted, and opened not His mouth.”',
                    scriptural: 'He was oppressed, and he was afflicted,\n' +
                        '    yet he opened not his mouth;\n' +
                        'like a lamb that is led to the slaughter,\n' +
                        '    and like a sheep that before its shearers is dumb,\n' +
                        '    so he opened not his mouth.\n'
                },
                link: {
                    label: 'Isaiah 53:7',
                    url: 'https://www.biblegateway.com/passage/?search=Isaiah%2053%3A7&version=RSVCE',
                    tip: 'He was oppressed, and he was afflicted,\n' +
                        '    yet he opened not his mouth;\n' +
                        'like a lamb that is led to the slaughter,\n' +
                        '    and like a sheep that before its shearers is dumb,\n' +
                        '    so he opened not his mouth.\n'
                }
            }
        ],
        fourth: [
            {
                id: 'SFI401',
                text: {
                    summary: 'Jesus carries His Cross to Calvary.',
                    scriptural: 'So they took Jesus, and he went out, bearing his own cross, to the place called the place of a skull, which is called in Hebrew Gol′gotha.'
                },
                link: {
                    label: 'Jn. 19:17',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%2019%3A17&version=RSVCE',
                    tip: 'So they took Jesus, and he went out, bearing his own cross, to the place called the place of a skull, which is called in Hebrew Gol′gotha.'
                }
            },
            {
                id: 'SFI402',
                text: {
                    summary: '“He who does not carry his cross and follow Me, cannot be My disciple.”',
                    scriptural: 'Whoever does not bear his own cross and come after me, cannot be my disciple.'
                },
                link: {
                    label: 'Lk. 14:27',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%2014%3A27&version=RSVCE',
                    tip: 'Whoever does not bear his own cross and come after me, cannot be my disciple.'
                }
            },
            {
                id: 'SFI403',
                text: {
                    summary: '“Take My yoke upon you… your souls will find rest.”',
                    scriptural: 'Take my yoke upon you, and learn from me; for I am gentle and lowly in heart, and you will find rest for your souls.'
                },
                link: {
                    label: 'Mat. 11:29',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%2011%3A29&version=RSVCE',
                    tip: 'Take my yoke upon you, and learn from me; for I am gentle and lowly in heart, and you will find rest for your souls.'
                }
            },
            {
                id: 'SFI404',
                text: {
                    summary: '“My yoke is easy, and My burden light.”',
                    scriptural: 'For my yoke is easy, and my burden is light.”'
                },
                link: {
                    label: 'Mat. 11:30',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%2011%3A30&version=RSVCE',
                    tip: 'For my yoke is easy, and my burden is light.”'
                }
            },
            {
                id: 'SFI405',
                text: {
                    summary: '“He who loses his life for My sake will find it.”',
                    scriptural: 'He who finds his life will lose it, and he who loses his life for my sake will find it.'
                },
                link: {
                    label: 'Mat. 10:39',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%2010%3A39&version=RSVCE',
                    tip: 'He who finds his life will lose it, and he who loses his life for my sake will find it.'
                }
            },
            {
                id: 'SFI406',
                text: {
                    summary: 'What we suffer now can never compare to the glory that awaits us.',
                    scriptural: 'I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us.'
                },
                link: {
                    label: 'Rom. 8:18',
                    url: 'https://www.biblegateway.com/passage/?search=Rom.%208%3A18&version=RSVCE',
                    tip: 'I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us.'
                }
            },
            {
                id: 'SFI407',
                text: {
                    summary: 'Simon the Cyrenean helps Jesus carry the Cross to Calvary.',
                    scriptural: 'And as they led him away, they seized one Simon of Cyre′ne, who was coming in from the country, and laid on him the cross, to carry it behind Jesus.'
                },
                link: {
                    label: 'Lk. 23:26',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%2023%3A26&version=RSVCE',
                    tip: 'And as they led him away, they seized one Simon of Cyre′ne, who was coming in from the country, and laid on him the cross, to carry it behind Jesus.'
                }
            },
            {
                id: 'SFI408',
                text: {
                    summary: '“Weep not for Me, but for your children.”',
                    scriptural: 'But Jesus turning to them said, “Daughters of Jerusalem, do not weep for me, but weep for yourselves and for your children.'
                },
                link: {
                    label: 'Lk. 23:28',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%2023%3A28&version=RSVCE',
                    tip: 'But Jesus turning to them said, “Daughters of Jerusalem, do not weep for me, but weep for yourselves and for your children.'
                }
            },
            {
                id: 'SFI409',
                text: {
                    summary: '“God forbid that I should glory, save in the cross of Christ.”',
                    scriptural: 'But far be it from me to glory except in the cross of our Lord Jesus Christ, by which the world has been crucified to me, and I to the world.'
                },
                link: {
                    label: 'Galat. 6:14',
                    url: 'https://www.biblegateway.com/passage/?search=Galat.%206%3A14&version=RSVCE',
                    tip: 'But far be it from me to glory except in the cross of our Lord Jesus Christ, by which the world has been crucified to me, and I to the world.'
                }
            },
            {
                id: 'SFI410',
                text: {
                    summary: 'The worldly person is an “enemy of the Cross of Christ.”',
                    scriptural: 'For many, of whom I have often told you and now tell you even with tears, live as enemies of the cross of Christ.'
                },
                link: {
                    label: 'Phil. 3:18',
                    url: 'https://www.biblegateway.com/passage/?search=Phil.%203%3A18&version=RSVCE',
                    tip: 'For many, of whom I have often told you and now tell you even with tears, live as enemies of the cross of Christ.'
                }
            }
        ],
        fifth: [
            {
                id: 'SFI501',
                text: {
                    summary: 'Jesus is nailed to the Cross.',
                    scriptural: 'And when they came to the place which is called The Skull, there they crucified him, and the criminals, one on the right and one on the left.'
                },
                link: {
                    label: 'Lk. 23:33',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%2023%3A33&version=RSVCE',
                    tip: 'And when they came to the place which is called The Skull, there they crucified him, and the criminals, one on the right and one on the left.'
                }
            },
            {
                id: 'SFI502',
                text: {
                    summary: 'He prays: “Father, forgive them…”',
                    scriptural: 'And Jesus said, “Father, forgive them; for they know not what they do.”'
                },
                link: {
                    label: 'Lk. 23:34',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%2023%3A34&version=RSVCE',
                    tip: 'And Jesus said, “Father, forgive them; for they know not what they do.”'
                }
            },
            {
                id: 'SFI503',
                text: {
                    summary: 'Jesus says to the repentant thief: “This day you will be with Me in paradise.”',
                    scriptural: 'And he said to him, “Truly, I say to you, today you will be with me in Paradise.”'
                },
                link: {
                    label: 'Lk. 23:43',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%2023%3A43&version=RSVCE',
                    tip: 'And he said to him, “Truly, I say to you, today you will be with me in Paradise.”'
                }
            },
            {
                id: 'SFI504',
                text: {
                    summary: 'Looking down at Mary His Mother, He says: “Woman, there is your son.”',
                    scriptural: 'When Jesus saw his mother, and the disciple whom he loved standing near, he said to his mother, “Woman, behold, your son!”'
                },
                link: {
                    label: 'Jn. 19:26',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%2019%3A26&version=RSVCE',
                    tip: 'When Jesus saw his mother, and the disciple whom he loved standing near, he said to his mother, “Woman, behold, your son!”'
                }
            },
            {
                id: 'SFI505',
                text: {
                    summary: 'Looking at the beloved disciple, He says: “There is your Mother.”',
                    scriptural: 'Then he said to the disciple, “Behold, your mother!” And from that hour the disciple took her to his own home.'
                },
                link: {
                    label: 'Jn. 19:27',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%2019%3A27&version=RSVCE',
                    tip: 'Then he said to the disciple, “Behold, your mother!” And from that hour the disciple took her to his own home.'
                }
            },
            {
                id: 'SFI506',
                text: {
                    summary: 'Jesus endures the terrible torture of the Cross for three hours.',
                    scriptural: 'Now from the sixth hour ... until the ninth hour.'
                },
                link: {
                    label: 'Mat. 27:45',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%2027%3A45&version=RSVCE',
                    tip: 'Now from the sixth hour ... until the ninth hour.'
                }
            },
            {
                id: 'SFI507',
                text: {
                    summary: 'Nature itself seemed in mourning, for darkness covered the earth.',
                    scriptural: '...there was darkness over all the land until the ninth hour.'
                },
                link: {
                    label: 'Mat. 27:45',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%2027%3A45&version=RSVCE',
                    tip: '...there was darkness over all the land until the ninth hour.'
                }
            },
            {
                id: 'SFI508',
                text: {
                    summary: '“There is no greater love than this: to lay down one’s life for one’s friends.”',
                    scriptural: 'Greater love has no man than this, that a man lay down his life for his friends.'
                },
                link: {
                    label: 'Jn. 15:13',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%2015%3A13&version=RSVCE',
                    tip: 'Greater love has no man than this, that a man lay down his life for his friends.'
                }
            },
            {
                id: 'SFI509',
                text: {
                    summary: 'Having completed His redeeming mission, Jesus cried out: “It is finished.”',
                    scriptural: 'When Jesus had received the vinegar, he said, “It is finished”; and he bowed his head and gave up his spirit.'
                },
                link: {
                    label: 'Jn. 19:30',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%2019%3A30&version=RSVCE',
                    tip: 'When Jesus had received the vinegar, he said, “It is finished”; and he bowed his head and gave up his spirit.'
                }
            },
            {
                id: 'SFI510',
                text: {
                    summary: '“Father, into Your hands, I commend My spirit.”',
                    scriptural: 'Then Jesus, crying with a loud voice, said, “Father, into thy hands I commit my spirit!” And having said this he breathed his last.'
                },
                link: {
                    label: 'Lk. 23:46',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%2023%3A46&version=RSVCE',
                    tip: 'Then Jesus, crying with a loud voice, said, “Father, into thy hands I commit my spirit!” And having said this he breathed his last.'
                }
            }
        ]
    }

    const gloriousInsights = {
        first: [
            {
                id: 'GFI101',
                text: {
                    summary: 'Jesus is risen from the dead.',
                    scriptural: 'Remember how he told you, while he was still in Galilee,'
                },
                link: {
                    label: 'Lk. 24:6',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%2024%3A6&version=RSVCE',
                    tip: 'Remember how he told you, while he was still in Galilee,'
                }
            },
            {
                id: 'GFI102',
                text: {
                    summary: 'He appeared to the apostles and says: “Peace be with you.”',
                    scriptural: 'On the evening of that day, the first day of the week, the doors being shut where the disciples were, for fear of the Jews, Jesus came and stood among them and said to them, “Peace be with you.”'
                },
                link: {
                    label: 'Jn. 20:19',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%2020%3A19&version=RSVCE',
                    tip: 'On the evening of that day, the first day of the week, the doors being shut where the disciples were, for fear of the Jews, Jesus came and stood among them and said to them, “Peace be with you.”'
                }
            },
            {
                id: 'GFI103',
                text: {
                    summary: 'He then appeared to more than five hundred at one time.',
                    scriptural: 'Then he appeared to more than five hundred brethren at one time, most of whom are still alive, though some have fallen asleep.'
                },
                link: {
                    label: '1 Cor. 15:6',
                    url: 'https://www.biblegateway.com/passage/?search=1%20Cor.%2015%3A6&version=RSVCE',
                    tip: 'Then he appeared to more than five hundred brethren at one time, most of whom are still alive, though some have fallen asleep.'
                }
            },
            {
                id: 'GFI104',
                text: {
                    summary: 'If Christ is not risen, then our faith is useless.',
                    scriptural: 'if Christ has not been raised, then our preaching is in vain and your faith is in vain.'
                },
                link: {
                    label: '1 Cor 15:14',
                    url: 'https://www.biblegateway.com/passage/?search=1%20Cor%2015%3A14&version=RSVCE',
                    tip: 'if Christ has not been raised, then our preaching is in vain and your faith is in vain.'
                }
            },
            {
                id: 'GFI105',
                text: {
                    summary: 'Thomas declares: “Unless I see I will not believe.”',
                    scriptural: 'So the other disciples told him, “We have seen the Lord.” But he said to them, “Unless I see in his hands the print of the nails, and place my finger in the mark of the nails, and place my hand in his side, I will not believe.”'
                },
                link: {
                    label: 'Jn. 20:25',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%2020%3A25&version=RSVCE',
                    tip: 'So the other disciples told him, “We have seen the Lord.” But he said to them, “Unless I see in his hands the print of the nails, and place my finger in the mark of the nails, and place my hand in his side, I will not believe.”'
                }
            },
            {
                id: 'GFI106',
                text: {
                    summary: '“Blessed are they who have not seen and have believed.”',
                    scriptural: 'Jesus said to him, “Have you believed because you have seen me? Blessed are those who have not seen and yet believe.”'
                },
                link: {
                    label: 'Jn. 20:29',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%2020%3A29&version=RSVCE',
                    tip: 'Jesus said to him, “Have you believed because you have seen me? Blessed are those who have not seen and yet believe.”'
                }
            },
            {
                id: 'GFI107',
                text: {
                    summary: '“He who believes and is baptized will be saved.”',
                    scriptural: 'He who believes and is baptized will be saved; but he who does not believe will be condemned.'
                },
                link: {
                    label: 'Mk. 16:16',
                    url: 'https://www.biblegateway.com/passage/?search=Mk.%2016%3A16&version=RSVCE',
                    tip: 'He who believes and is baptized will be saved; but he who does not believe will be condemned.'
                }
            },
            {
                id: 'GFI108',
                text: {
                    summary: 'Faith is a gift of God.',
                    scriptural: 'For by grace you have been saved through faith; and this is not your own doing, it is the gift of God-'
                },
                link: {
                    label: 'Eph. 2:8',
                    url: 'https://www.biblegateway.com/passage/?search=Eph.%202%3A8&version=RSVCE',
                    tip: 'For by grace you have been saved through faith; and this is not your own doing, it is the gift of God—'
                }
            },
            {
                id: 'GFI109',
                text: {
                    summary: '“He who believes in Me will never die.”',
                    scriptural: 'and whoever lives and believes in me shall never die. Do you believe this?”'
                },
                link: {
                    label: 'Jn. 11:26',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%2011%3A26&version=RSVCE',
                    tip: 'and whoever lives and believes in me shall never die. Do you believe this?”'
                }
            },
            {
                id: 'GFI110',
                text: {
                    summary: '“Lord, I do believe, help my unbelief.”',
                    scriptural: 'And Jesus said to him, “If you can! All things are possible to him who believes.”'
                },
                link: {
                    label: 'Mk. 9:23',
                    url: 'https://www.biblegateway.com/passage/?search=Mk.%209%3A23&version=RSVCE',
                    tip: 'And Jesus said to him, “If you can! All things are possible to him who believes.”'
                }
            }
        ],
        second: [
            {
                id: 'GFI201',
                text: {
                    summary: '“I am going to My Father and your Father, to My God and your God.”',
                    scriptural: 'Jesus said to her, “Do not hold me, for I have not yet ascended to the Father; but go to my brethren and say to them, I am ascending to my Father and your Father, to my God and your God.”'
                },
                link: {
                    label: 'Jn. 20:17',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%2020%3A17&version=RSVCE',
                    tip: 'Jesus said to her, “Do not hold me, for I have not yet ascended to the Father; but go to my brethren and say to them, I am ascending to my Father and your Father, to my God and your God.”'
                }
            },
            {
                id: 'GFI202',
                text: {
                    summary: '“I go to prepare a place for you.”',
                    scriptural: 'In my Father’s house are many rooms; if it were not so, would I have told you that I go to prepare a place for you?'
                },
                link: {
                    label: 'Jn. 14:2',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%2014%3A2&version=RSVCE',
                    tip: 'In my Father’s house are many rooms; if it were not so, would I have told you that I go to prepare a place for you?'
                }
            },
            {
                id: 'GFI203',
                text: {
                    summary: '“That where I am, there you also may be.”',
                    scriptural: 'And when I go and prepare a place for you, I will come again and will take you to myself, that where I am you may be also.'
                },
                link: {
                    label: 'Jn. 14:3',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%2014%3A3&version=RSVCE',
                    tip: 'And when I go and prepare a place for you, I will come again and will take you to myself, that where I am you may be also.'
                }
            },
            {
                id: 'GFI204',
                text: {
                    summary: '“Make disciples of all nations.”',
                    scriptural: 'Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit'
                },
                link: {
                    label: 'Mat. 28:19',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%2028%3A19&version=RSVCE',
                    tip: 'Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit'
                }
            },
            {
                id: 'GFI205',
                text: {
                    summary: '“There shall be one fold and one shepherd.”',
                    scriptural: 'And I have other sheep, that are not of this fold; I must bring them also, and they will heed my voice. So there shall be one flock, one shepherd.'
                },
                link: {
                    label: 'Jn. 10:16',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%2010%3A16&version=RSVCE',
                    tip: 'And I have other sheep, that are not of this fold; I must bring them also, and they will heed my voice. So there shall be one flock, one shepherd.'
                }
            },
            {
                id: 'GFI206',
                text: {
                    summary: '“I am with you all days.”',
                    scriptural: 'teaching them to observe all that I have commanded you; and lo, I am with you always, to the close of the age.”'
                },
                link: {
                    label: 'Mat. 28:20',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%2028%3A20&version=RSVCE',
                    tip: 'teaching them to observe all that I have commanded you; and lo, I am with you always, to the close of the age.”'
                }
            },
            {
                id: 'GFI207',
                text: {
                    summary: '“You have not chosen Me, I have chosen you.”',
                    scriptural: 'You did not choose me, but I chose you and appointed you that you should go and bear fruit and that your fruit should abide; so that whatever you ask the Father in my name, he may give it to you.'
                },
                link: {
                    label: 'Jn. 15:16',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%2015%3A16&version=RSVCE',
                    tip: 'You did not choose me, but I chose you and appointed you that you should go and bear fruit and that your fruit should abide; so that whatever you ask the Father in my name, he may give it to you.'
                }
            },
            {
                id: 'GFI208',
                text: {
                    summary: '“I am the way, the Truth, and the Life.”',
                    scriptural: 'Jesus said to him, “I am the way, and the truth, and the life; no one comes to the Father, but by me.'
                },
                link: {
                    label: 'Jn. 14:6',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%2014%3A6&version=RSVCE',
                    tip: 'Jesus said to him, “I am the way, and the truth, and the life; no one comes to the Father, but by me.'
                }
            },
            {
                id: 'GFI209',
                text: {
                    summary: 'Jesus ascends to the right hand of His Father.',
                    scriptural: 'So then the Lord Jesus, after he had spoken to them, was taken up into heaven, and sat down at the right hand of God.'
                },
                link: {
                    label: 'Mk. 16:19',
                    url: 'https://www.biblegateway.com/passage/?search=Mk.%2016%3A19&version=RSVCE',
                    tip: 'So then the Lord Jesus, after he had spoken to them, was taken up into heaven, and sat down at the right hand of God.'
                }
            },
            {
                id: 'GFI210',
                text: {
                    summary: '“I will draw all men to Myself.”',
                    scriptural: 'and I, when I am lifted up[a] from the earth, will draw all men to myself.”'
                },
                link: {
                    label: 'Jn. 12:32',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%2012%3A32&version=RSVCE',
                    tip: 'and I, when I am lifted up[a] from the earth, will draw all men to myself.”'
                }
            }
        ],
        third: [
            {
                id: 'GFI301',
                text: {
                    summary: 'The Apostles and Mary were together in prayer.',
                    scriptural: 'When the day of Pentecost had come, they were all together in one place.'
                },
                link: {
                    label: 'Acts 2:1',
                    url: 'https://www.biblegateway.com/passage/?search=Acts%202%3A1&version=RSVCE',
                    tip: 'When the day of Pentecost had come, they were all together in one place.'
                }
            },
            {
                id: 'GFI302',
                text: {
                    summary: 'A sound from heaven filled the whole house.',
                    scriptural: 'And suddenly a sound came from heaven like the rush of a mighty wind, and it filled all the house where they were sitting.'
                },
                link: {
                    label: 'Acts 2:2',
                    url: 'https://www.biblegateway.com/passage/?search=Acts%202%3A2&version=RSVCE',
                    tip: 'And suddenly a sound came from heaven like the rush of a mighty wind, and it filled all the house where they were sitting.'
                }
            },
            {
                id: 'GFI303',
                text: {
                    summary: 'Suddenly tongues of fire rested on each of them.',
                    scriptural: 'And there appeared to them tongues as of fire, distributed and resting on each one of them.'
                },
                link: {
                    label: 'Acts 2:3',
                    url: 'https://www.biblegateway.com/passage/?search=Acts%202%3A3&version=RSVCE',
                    tip: 'And there appeared to them tongues as of fire, distributed and resting on each one of them.'
                }
            },
            {
                id: 'GFI304',
                text: {
                    summary: 'They were filled with the Holy Spirit.',
                    scriptural: 'And they were all filled with the Holy Spirit and began to speak in other tongues, as the Spirit gave them utterance.'
                },
                link: {
                    label: 'Acts 2:4',
                    url: 'https://www.biblegateway.com/passage/?search=Acts%202%3A4&version=RSVCE',
                    tip: 'And they were all filled with the Holy Spirit and began to speak in other tongues, as the Spirit gave them utterance.'
                }
            },
            {
                id: 'GFI305',
                text: {
                    summary: 'Men of every nation understood them in their own language.',
                    scriptural: 'And at this sound the multitude came together, and they were bewildered, because each one heard them speaking in his own language.'
                },
                link: {
                    label: 'Acts 2:6',
                    url: 'https://www.biblegateway.com/passage/?search=Acts%202%3A6&version=RSVCE',
                    tip: 'And at this sound the multitude came together, and they were bewildered, because each one heard them speaking in his own language.'
                }
            },
            {
                id: 'GFI306',
                text: {
                    summary: 'They were strengthened to preach the Gospel without fear.',
                    scriptural: 'But Peter and John answered them, “Whether it is right in the sight of God to listen to you rather than to God, you must judge;'
                },
                link: {
                    label: 'Acts 4:19',
                    url: 'https://www.biblegateway.com/passage/?search=Acts%204%3A19&version=RSVCE',
                    tip: 'But Peter and John answered them, “Whether it is right in the sight of God to listen to you rather than to God, you must judge;'
                }
            },
            {
                id: 'GFI307',
                text: {
                    summary: 'Peter declared: “God has made both Lord and Messiah, this Jesus whom you crucified.”',
                    scriptural: 'Let all the house of Israel therefore know assuredly that God has made him both Lord and Christ, this Jesus whom you crucified.”'
                },
                link: {
                    label: 'Acts 2:36',
                    url: 'https://www.biblegateway.com/passage/?search=Acts%202%3A36&version=RSVCE',
                    tip: 'Let all the house of Israel therefore know assuredly that God has made him both Lord and Christ, this Jesus whom you crucified.”'
                }
            },
            {
                id: 'GFI308',
                text: {
                    summary: 'You are children of God because of your faith in Jesus.',
                    scriptural: 'for in Christ Jesus you are all sons of God, through faith.'
                },
                link: {
                    label: 'Galat. 3:26',
                    url: 'https://www.biblegateway.com/passage/?search=Galat.%203%3A26&version=RSVCE',
                    tip: 'for in Christ Jesus you are all sons of God, through faith.'
                }
            },
            {
                id: 'GFI309',
                text: {
                    summary: 'Love one another.',
                    scriptural: '“This is my commandment, that you love one another as I have loved you.'
                },
                link: {
                    label: 'Jn. 15:12',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%2015%3A12&version=RSVCE',
                    tip: '“This is my commandment, that you love one another as I have loved you.'
                }
            },
            {
                id: 'GFI310',
                text: {
                    summary: 'Love your enemies.',
                    scriptural: 'But I say to you, Love your enemies and pray for those who persecute you'
                },
                link: {
                    label: 'Mat. 5:44',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%205%3A44&version=RSVCE',
                    tip: 'But I say to you, Love your enemies and pray for those who persecute you'
                }
            }
        ],
        fourth: [
            {
                id: 'GFI401',
                text: {
                    summary: '“You will not suffer your faithful one to undergo corruption.”',
                    scriptural: 'For thou dost not give me up to Sheol, or let thy godly one see the Pit.'
                },
                link: {
                    label: 'Ps. 16:10',
                    url: 'https://www.biblegateway.com/passage/?search=Ps.%2016%3A10&version=RSVCE',
                    tip: 'For thou dost not give me up to Sheol, or let thy godly one see the Pit.'
                }
            },
            {
                id: 'GFI402',
                text: {
                    summary: '“You are the glory of Jerusalem. You are the splendid boast of our people.”',
                    scriptural: 'to execute judgment on all, and to convict all the ungodly of all their deeds of ungodliness which they have committed in such an ungodly way, and of all the harsh things which ungodly sinners have spoken against him.”'
                },
                link: {
                    label: 'Jud. 15:9',
                    url: 'https://www.biblegateway.com/passage/?search=Jud.%2015%3A9&version=RSVCE',
                    tip: 'to execute judgment on all, and to convict all the ungodly of all their deeds of ungodliness which they have committed in such an ungodly way, and of all the harsh things which ungodly sinners have spoken against him.”'
                }
            },
            {
                id: 'GFI403',
                text: {
                    summary: '“Arise, My beloved, My beautiful one, and come.”',
                    scriptural: 'My beloved speaks and says to me:\n' +
                        '“Arise, my love, my fair one,\n' +
                        '    and come away;'
                },
                link: {
                    label: 'Song. 2:10',
                    url: 'https://www.biblegateway.com/passage/?search=Song.%202%3A10&version=RSVCE',
                    tip: 'My beloved speaks and says to me:\n' +
                        '“Arise, my love, my fair one,\n' +
                        '    and come away;'
                }
            },
            {
                id: 'GFI404',
                text: {
                    summary: '“You are all-beautiful... and there is no blemish in you.”',
                    scriptural: 'You are all fair, my love;\n' +
                        '    there is no flaw in you.\n'
                },
                link: {
                    label: 'Song. 4:7',
                    url: 'https://www.biblegateway.com/passage/?search=Song.%204%3A7&version=RSVCE',
                    tip: 'You are all fair, my love;\n' +
                        '    there is no flaw in you.\n'
                }
            },
            {
                id: 'GFI405',
                text: {
                    summary: '“The Queen takes her place at Your right hand.”',
                    scriptural: 'Hear, O daughter, consider, and incline your ear;\n' +
                        '    forget your people and your father’s house;'
                },
                link: {
                    label: 'Ps. 45:10',
                    url: 'https://www.biblegateway.com/passage/?search=Ps.%2045%3A10&version=RSVCE',
                    tip: 'Hear, O daughter, consider, and incline your ear;\n' +
                        '    forget your people and your father’s house;'
                }
            },
            {
                id: 'GFI406',
                text: {
                    summary: '“Blessed are you, daughter... above all women on earth.”',
                    scriptural: 'wild waves of the sea, casting up the foam of their own shame; wandering stars for whom the nether gloom of darkness has been reserved for ever.'
                },
                link: {
                    label: 'Jud. 13:18',
                    url: 'https://www.biblegateway.com/passage/?search=Jud.%2013%3A18&version=RSVCE',
                    tip: 'wild waves of the sea, casting up the foam of their own shame; wandering stars for whom the nether gloom of darkness has been reserved for ever.'
                }
            },
            {
                id: 'GFI407',
                text: {
                    summary: '“Hail, full of grace, the Lord is with you.”',
                    scriptural: 'And he came to her and said, “Hail, full of grace, the Lord is with you!”'
                },
                link: {
                    label: 'Lk. 1:28',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%201%3A28&version=RSVCE',
                    tip: 'And he came to her and said, “Hail, full of grace, the Lord is with you!”'
                }
            },
            {
                id: 'GFI408',
                text: {
                    summary: 'If we are likened to Christ in His death, so shall we be in His resurrection.',
                    scriptural: 'For if we have been united with him in a death like his, we shall certainly be united with him in a resurrection like his.'
                },
                link: {
                    label: 'Rom. 6:5',
                    url: 'https://www.biblegateway.com/passage/?search=Rom.%206%3A5&version=RSVCE',
                    tip: 'For if we have been united with him in a death like his, we shall certainly be united with him in a resurrection like his.'
                }
            },
            {
                id: 'GFI409',
                text: {
                    summary: '“I shall return to take you with Me.”',
                    scriptural: 'And when I go and prepare a place for you, I will come again and will take you to myself, that where I am you may be also.'
                },
                link: {
                    label: 'Jn. 14:3',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%2014%3A3&version=RSVCE',
                    tip: 'And when I go and prepare a place for you, I will come again and will take you to myself, that where I am you may be also.'
                }
            },
            {
                id: 'GFI410',
                text: {
                    summary: '“God’s temple in heaven opened, and there was seen the ark of His covenant.”',
                    scriptural: 'Then God’s temple in heaven was opened, and the ark of his covenant was seen within his temple; and there were flashes of lightning, loud noises, peals of thunder, an earthquake, and heavy hail.'
                },
                link: {
                    label: 'Rev 11:19',
                    url: 'https://www.biblegateway.com/passage/?search=Rev%2011%3A19&version=RSVCE',
                    tip: 'Then God’s temple in heaven was opened, and the ark of his covenant was seen within his temple; and there were flashes of lightning, loud noises, peals of thunder, an earthquake, and heavy hail.'
                }
            }
        ],
        fifth: [
            {
                id: 'GFI501',
                text: {
                    summary: '“A great sign appeared in heaven: a woman clothed with the sun.”',
                    scriptural: 'And a great portent appeared in heaven, a woman clothed with the sun, with the moon under her feet, and on her head a crown of twelve stars;'
                },
                link: {
                    label: 'Rev. 12:1',
                    url: 'https://www.biblegateway.com/passage/?search=Rev.%2012%3A1&version=RSVCE',
                    tip: 'And a great portent appeared in heaven, a woman clothed with the sun, with the moon under her feet, and on her head a crown of twelve stars;'
                }
            },
            {
                id: 'GFI502',
                text: {
                    summary: '“The moon was under her feet, and on her head a crown of twelve stars.”',
                    scriptural: 'And a great portent appeared in heaven, a woman clothed with the sun, with the moon under her feet, and on her head a crown of twelve stars;'
                },
                link: {
                    label: 'Rev. 12:1',
                    url: 'https://www.biblegateway.com/passage/?search=Rev.%2012%3A1&version=RSVCE',
                    tip: 'And a great portent appeared in heaven, a woman clothed with the sun, with the moon under her feet, and on her head a crown of twelve stars;'
                }
            },
            {
                id: 'GFI503',
                text: {
                    summary: '“In the highest heavens did I dwell, my throne on a pillar of cloud”',
                    scriptural: 'I dwelt in high places,\n' +
                        '    and my throne was in a pillar of cloud.'
                },
                link: {
                    label: 'Sirach 24:4',
                    url: 'https://www.biblegateway.com/passage/?search=Sirach%2024%3A4&version=RSVCE',
                    tip: 'I dwelt in high places,\n' +
                        '    and my throne was in a pillar of cloud.'
                }
            },
            {
                id: 'GFI504',
                text: {
                    summary: '“I am the mother of pure love”',
                    scriptural: 'I am the mother of beautiful love, of fear, of knowledge, and of holy hope; being eternal, I therefore am given to all my children, to those who are named by him.'
                },
                link: {
                    label: 'Sirach 24:18',
                    url: 'https://www.biblegateway.com/passage/?search=Sirach%2024%3A17&version=RSVCE',
                    tip: 'I am the mother of beautiful love, of fear, of knowledge, and of holy hope; being eternal, I therefore am given to all my children, to those who are named by him.'
                }
            },
            {
                id: 'GFI505',
                text: {
                    summary: '“I am the mother of knowledge.”',
                    scriptural: 'I am the mother of beautiful love, of fear, of knowledge, and of holy hope; being eternal, I therefore am given to all my children, to those who are named by him.'
                },
                link: {
                    label: 'Sirach 24:18',
                    url: 'https://www.biblegateway.com/passage/?search=Sirach%2024%3A17&version=RSVCE',
                    tip: 'I am the mother of beautiful love, of fear, of knowledge, and of holy hope; being eternal, I therefore am given to all my children, to those who are named by him.'
                }
            },
            {
                id: 'GFI506',
                text: {
                    summary: '“I am the mother of hope.”',
                    scriptural: 'I am the mother of beautiful love, of fear, of knowledge, and of holy hope; being eternal, I therefore am given to all my children, to those who are named by him.'
                },
                link: {
                    label: 'Sirach 24:18',
                    url: 'https://www.biblegateway.com/passage/?search=Sirach%2024%3A17&version=RSVCE',
                    tip: 'I am the mother of beautiful love, of fear, of knowledge, and of holy hope; being eternal, I therefore am given to all my children, to those who are named by him.'
                }
            },
            {
                id: 'GFI507',
                text: {
                    summary: 'Mary is Queen Mother of Him who “shall reign in the house of Jacob forever.”',
                    scriptural: 'He will be great, and will be called the Son of the Most High;\n' +
                        'and the Lord God will give to him the throne of his father David'
                },
                link: {
                    label: 'Lk. 1:32',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%201%3A32&version=RSVCE',
                    tip: 'He will be great, and will be called the Son of the Most High;\n' +
                        'and the Lord God will give to him the throne of his father David'
                }
            },
            {
                id: 'GFI508',
                text: {
                    summary: '“Those who seek Me find Me.”',
                    scriptural: 'I love those who love me,\n' +
                        '    and those who seek me diligently find me.'
                },
                link: {
                    label: 'Prov. 8:17',
                    url: 'https://www.biblegateway.com/passage/?search=Prov.%208%3A17&version=RSVCE',
                    tip: 'I love those who love me,\n' +
                        '    and those who seek me diligently find me.'
                }
            },
            {
                id: 'GFI509',
                text: {
                    summary: '“He who serves Me will never fail.”',
                    scriptural: 'Those who eat me will hunger for more,\n' +
                        '    and those who drink me will thirst for more.'
                },
                link: {
                    label: 'Sirach 24:21',
                    url: 'https://www.biblegateway.com/passage/?search=Sirach%2024%3A21&version=RSVCE',
                    tip: 'Those who eat me will hunger for more,\n' +
                        '    and those who drink me will thirst for more.'
                }
            },
            {
                id: 'GFI510',
                text: {
                    summary: '“He who finds Me finds life.”',
                    scriptural: 'For he who finds me finds life\n' +
                        '    and obtains favor from the Lord;'
                },
                link: {
                    label: 'Prov. 8:35',
                    url: 'https://www.biblegateway.com/passage/?search=Prov.%208%3A35&version=RSVCE',
                    tip: 'For he who finds me finds life\n' +
                        '    and obtains favor from the Lord;'
                }
            }
        ]
    }

    return {
        joyfulInsights,
        luminousInsights,
        sorrowfulInsights,
        gloriousInsights
    }
})