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
                        'therefore the child to be born[a] will be called holy,\n' +
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
                    scriptural: 'And blessed is she who believed that there would be[a] a fulfilment of what was spoken to her from the Lord.”'
                },
                link: {
                    label: 'Lk. 1:45',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%201%3A45&version=RSVCE',
                    tip: 'And blessed is she who believed that there would be[a] a fulfilment of what was spoken to her from the Lord.”'
                }
            },
            {
                id: 'JFI204',
                text: {
                    summary: 'Mary herself is with Child, through the Holy Spirit.',
                    scriptural: 'Now the birth of Jesus Christ[a] took place in this way. When his mother Mary had been betrothed to Joseph, before they came together she was found to be with child of the Holy Spirit;'
                },
                link: {
                    label: 'Mat. 1:18',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%201%3A45&version=RSVCE',
                    tip: 'Now the birth of Jesus Christ[a] took place in this way. When his mother Mary had been betrothed to Joseph, before they came together she was found to be with child of the Holy Spirit;'
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
                    tip: 'And she gave birth to her first-born[a] son and wrapped him in swaddling cloths, and laid him in a manger, because there was no place for them in the inn.'
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
                        '“Behold, this child is set for the fall[a] and rising of many in Israel,\n' +
                        'and for a sign that is spoken against'
                },
                link: {
                    label: 'Lk. 2:34',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A34&version=RSVCE',
                    tip: 'and Simeon blessed them and said to Mary his mother,\n' +
                        '\n' +
                        '“Behold, this child is set for the fall[a] and rising of many in Israel,\n' +
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
                    scriptural: 'And when Jesus was baptized, he went up immediately from the water, and behold, the heavens were opened[a] and he saw the Spirit of God descending like a dove, and alighting on him;'
                },
                link: {
                    label: 'Mat. 3:16',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%203%3A16&version=RSVCE',
                    tip: 'And when Jesus was baptized, he went up immediately from the water, and behold, the heavens were opened[a] and he saw the Spirit of God descending like a dove, and alighting on him;'
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
        ]
    }

    return {
        joyfulInsights,
        luminousInsights
    }
})