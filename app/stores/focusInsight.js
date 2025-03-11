import { defineStore } from 'pinia'

export const useFocusInsightStore = defineStore('focusInsight', () => {
    const joyfulInsights = {
        'first': [
            {
                id: 'JFI101',
                text: 'Through the disobedience of Adam sin enters the world.',
                link: {
                    label: 'Rom. 5:12',
                    url: 'https://www.biblegateway.com/passage/?search=Rom.%205%3A12&version=RSVCE',
                    tip: 'Therefore as sin came into the world through one man and death through sin, and so death spread to all men because all men sinned'
                },
            },
            {
                id: 'JFI102',
                text: 'The Father sends His Son to save the world.',
                link: {
                    label: 'Jn. 3:17',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%203%3A17&version=RSVCE',
                    tip: 'For God sent the Son into the world, not to condemn the world, but that the world might be saved through him.'
                }
            },
            {
                id: 'JFI103',
                text: 'The Angel Gabriel is sent to a virgin named Mary.',
                link: {
                    label: 'Lk. 1:26-27',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%201%3A26-27&version=RSVCE',
                    tip: '[26] In the sixth month the angel Gabriel was sent from God to a city of Galilee named Nazareth, [27] to a virgin betrothed to a man whose name was Joseph, of the house of David; and the virgin’s name was Mary.'
                }
            },
            {
                id: 'JFI104',
                text: 'The Angel tells Mary: “You are to have a Son and will name Him Jesus.”',
                link: {
                    label: 'Lk. 1:31',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%201%3A31&version=RSVCE',
                    tip: 'And behold, you will conceive in your womb and bear a son, and you shall call his name Jesus.'
                }
            },
            {
                id: 'JFI105',
                text: 'He is the Son of God.',
                link: {
                    label: 'Lk. 1:32',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%201%3A32&version=RSVCE',
                    tip: 'He will be great, and will be called the Son of the Most High; and the Lord God will give to him the throne of his father David'
                }
            },
            {
                id: 'JFI106',
                text: 'Mary consents: “Let it be done to me.”',
                link: {
                    label: 'Lk. 1:38',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%201%3A38&version=RSVCE',
                    tip: 'And Mary said, “Behold, I am the handmaid of the Lord; let it be to me according to your word.” And the angel departed from her.',
                }
            },
            {
                id: 'JFI107',
                text: 'God the Son becomes Man, in obedience to His Father.',
                link: {
                    label: 'Lk. 1:35',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%201%3A35&version=RSVCE',
                    tip: 'And the angel said to her,\n' +
                        '\n' +
                        '“The Holy Spirit will come upon you,\n' +
                        'and the power of the Most High will overshadow you;\n' +
                        'therefore the child to be born[a] will be called holy,\n' +
                        'the Son of God.'
                }
            },
            {
                id: 'JFI108',
                text: 'By His obedience many shall be saved.',
                link: {
                    label: 'Rom. 5:19',
                    url: 'https://www.biblegateway.com/passage/?search=Rom.%205%3A19&version=RSVCE',
                    tip: 'For as by one man’s disobedience many were made sinners, so by one man’s obedience many will be made righteous.'
                }
            },
            {
                id: 'JFI109',
                text: 'Mary becomes Mother of God.',
                link: {
                    label: 'Lk. 1:35',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%201%3A35&version=RSVCE',
                    tip: 'And the angel said to her,\n' +
                        '\n' +
                        '“The Holy Spirit will come upon you,\n' +
                        'and the power of the Most High will overshadow you;\n' +
                        'therefore the child to be born[a] will be called holy,\n' +
                        'the Son of God.'
                }
            },
            {
                id: 'JFI110',
                text: 'Nothing is impossible with God.',
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
                text: 'Mary visits her elderly cousin Elizabeth.',
                link: {
                    label: 'Lk. 1:40',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%201%3A40&version=RSVCE',
                    tip: 'and she entered the house of Zechari′ah and greeted Elizabeth.'
                }
            },
            {
                id: 'JFI202',
                text: 'Elizabeth is with child. His name is John.',
                link: {
                    label: 'Lk. 1:13',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%201%3A13&version=RSVCE',
                    tip: 'But the angel said to him, “Do not be afraid, Zechari′ah, for your prayer is heard, and your wife Elizabeth will bear you a son, and you shall call his name John.'
                }
            },
            {
                id: 'JFI203',
                text: 'She greets Mary: “Blessed are you because you believed.”',
                link: {
                    label: 'Lk. 1:45',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%201%3A45&version=RSVCE',
                    tip: 'And blessed is she who believed that there would be[a] a fulfilment of what was spoken to her from the Lord.”'
                }
            },
            {
                id: 'JFI204',
                text: 'Mary herself is with Child, through the Holy Spirit.',
                link: {
                    label: 'Mat. 1:18',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%201%3A45&version=RSVCE',
                    tip: 'Now the birth of Jesus Christ[a] took place in this way. When his mother Mary had been betrothed to Joseph, before they came together she was found to be with child of the Holy Spirit;'
                }
            },
            {
                id: 'JFI205',
                text: 'She answers: “My soul proclaims the greatness of the Lord.”',
                link: {
                    label: 'Lk. 1:46',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%201%3A45&version=RSVCE',
                    tip: 'nd Mary said,\n' +
                        '\n' +
                        'Mary’s Song of Praise\n' +
                        '“My soul magnifies the Lord,'
                }
            },
            {
                id: 'JFI206',
                text: '“His mercy reaches from age to age.”',
                link: {
                    label: 'Lk. 1:50',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%201%3A50&version=RSVCE',
                    tip: 'And his mercy is on those who fear him\n' +
                        'from generation to generation.'
                }
            },
            {
                id: 'JFI207',
                text: 'Mary, the Mother of God, stays to help Elizabeth.',
                link: {
                    label: 'Lk. 1:56',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%201%3A56&version=RSVCE',
                    tip: 'And Mary remained with her about three months, and returned to her home.'
                }
            },
            {
                id: 'JFI208',
                text: 'After three months Mary returns to her home in Nazareth.',
                link: {
                    label: 'Lk. 1:56',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%201%3A56&version=RSVCE',
                    tip: 'And Mary remained with her about three months, and returned to her home.'
                }
            },
            {
                id: 'JFI209',
                text: 'Do good to all.',
                link: {
                    label: 'Galat. 6:10',
                    url: 'https://www.biblegateway.com/passage/?search=Galat.%206%3A10&version=RSVCE',
                    tip: 'So then, as we have opportunity, let us do good to all men, and especially to those who are of the household of faith.'
                }
            },
            {
                id: 'JFI210',
                text: 'Be at peace with everyone.',
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
                text: 'In Bethlehem will be born He Who is to rule my people.',
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
                text: 'Joseph and Mary leave Nazareth to register in Bethlehem.',
                link: {
                    label: 'Lk. 2:4',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A4&version=RSVCE',
                    tip: 'And Joseph also went up from Galilee, from the city of Nazareth, to Judea, to the city of David, which is called Bethlehem, because he was of the house and lineage of David'
                }
            },
            {
                id: 'JFI303',
                text: 'There, Mary gives birth to the Son of God.',
                link: {
                    label: 'Lk. 2:7',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A7&version=RSVCE',
                    tip: 'And she gave birth to her first-born[a] son and wrapped him in swaddling cloths, and laid him in a manger, because there was no place for them in the inn.'
                }
            },
            {
                id: 'JFI304',
                text: 'Mary lays Him in a manger, because there is no room for Him in the inn.',
                link: {
                    label: 'Lk. 2:7',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A7&version=RSVCE',
                    tip: 'And she gave birth to her first-born[a] son and wrapped him in swaddling cloths, and laid him in a manger, because there was no place for them in the inn.'
                }
            },
            {
                id: 'JFI305',
                text: 'Angels announce to shepherds nearby: “The Savior is born.”',
                link: {
                    label: 'Lk. 2:10-11',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A10-11&version=RSVCE',
                    tip: '[10] And the angel said to them, “Be not afraid; for behold, I bring you good news of a great joy which will come to all the people; [11] for to you is born this day in the city of David a Savior, who is Christ the Lord.'
                }
            },
            {
                id: 'JFI306',
                text: 'Angels sing: “Peace to men of good will.”',
                link: {
                    label: 'Lk. 2:14',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A14&version=RSVCE',
                    tip: '“Glory to God in the highest,\n' +
                        'and on earth peace among men with whom he is pleased!”'
                }
            },
            {
                id: 'JFI307',
                text: 'Wise men come from the East in search of Christ.',
                link: {
                    label: 'Mat. 2:1-2',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%202%3A1-2&version=RSVCE',
                    tip: '[1] Now when Jesus was born in Bethlehem of Judea in the days of Herod the king, behold, wise men from the East came to Jerusalem, saying, [2] “Where is he who has been born king of the Jews? For we have seen his star in the East, and have come to worship him.”'
                }
            },
            {
                id: 'JFI308',
                text: 'Entering the house in Bethlehem, they worship Him.',
                link: {
                    label: 'Mat. 2:11',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%202%3A11&version=RSVCE',
                    tip: 'and going into the house they saw the child with Mary his mother, and they fell down and worshiped him. Then, opening their treasures, they offered him gifts, gold and frankincense and myrrh.'
                }
            },
            {
                id: 'JFI309',
                text: 'All nations serve Him.',
                link: {
                    label: 'Ps. 72:11',
                    url: 'https://www.biblegateway.com/passage/?search=Ps.%2072%3A11&version=RSVCE',
                    tip: 'May all kings fall down before him,\n' +
                        '    all nations serve him!'
                }
            },
            {
                id: 'JFI310',
                text: 'Those who accept Christ become children of God.',
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
                text: 'When the Child Jesus is eight days old, He is circumcised.',
                link: {
                    label: 'Lk. 2:21',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A21&version=RSVCE',
                    tip: 'And at the end of eight days, when he was circumcised, he was called Jesus, the name given by the angel before he was conceived in the womb.'
                }
            },
            {
                id: 'JFI402',
                text: 'And his parents name Him Jesus.',
                link: {
                    label: 'Lk. 2:21',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A21&version=RSVCE',
                    tip: 'And at the end of eight days, when he was circumcised, he was called Jesus, the name given by the angel before he was conceived in the womb.'
                }
            },
            {
                id: 'JFI403',
                text: 'The name of Jesus is the only name by which we can be saved.',
                link: {
                    label: 'Acts 4:12',
                    url: 'https://www.biblegateway.com/passage/?search=Acts%204%3A12&version=RSVCE',
                    tip: 'And there is salvation in no one else, for there is no other name under heaven given among men by which we must be saved.'
                }
            },
            {
                id: 'JFI404',
                text: '“Ask the Father anything in My Name. He will give it to you.”',
                link: {
                    label: 'Jn. 16:23',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%2016%3A23&version=RSVCE',
                    tip: 'In that day you will ask nothing of me. Truly, truly, I say to you, if you ask anything of the Father, he will give it to you in my name.'
                }
            },
            {
                id: 'JFI405',
                text: 'Lord, You are good and forgiving to all who call upon Your Name.',
                link: {
                    label: 'Ps. 86:5',
                    url: 'https://www.biblegateway.com/passage/?search=Ps.%2086%3A5&version=RSVCE',
                    tip: 'For thou, O Lord, art good and forgiving,\n' +
                        '    abounding in steadfast love to all who call on thee.'
                }
            },
            {
                id: 'JFI406',
                text: 'Joseph and Mary take Jesus to Jerusalem to present Him to God.',
                link: {
                    label: 'Lk. 2:22',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A22&version=RSVCE',
                    tip: 'And when the time came for their purification according to the law of Moses, they brought him up to Jerusalem to present him to the Lord'
                }
            },
            {
                id: 'JFI407',
                text: 'Simeon, a holy man, foretells: “This Child is destined for the fall and rise of many.”',
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
                text: '“Your own soul a sword shall pierce.”',
                link: {
                    label: 'Lk. 2:35',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A35&version=RSVCE',
                    tip: '(and a sword will pierce through your own soul also),\n' +
                        'that thoughts out of many hearts may be revealed.”'
                }
            },
            {
                id: 'JFI409',
                text: 'Joseph and Mary take Jesus to their hometown of Nazareth.',
                link: {
                    label: 'Lk. 2:39',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A39&version=RSVCE',
                    tip: 'And when they had performed everything according to the law of the Lord, they returned into Galilee, to their own city, Nazareth.'
                }
            },
            {
                id: 'JFI410',
                text: 'Whatever you do, do all in the Name of Jesus.',
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
                text: 'Jesus is twelve years old, and goes to Jerusalem with Mary and Joseph.',
                link: {
                    label: 'Lk. 2:42',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A42&version=RSVCE',
                    tip: 'And when he was twelve years old, they went up according to custom;'
                }
            },
            {
                id: 'JFI502',
                text: 'Jesus remains in Jerusalem. His parents do not realize it.',
                link: {
                    label: 'Lk. 2:43',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A43&version=RSVCE',
                    tip: 'and when the feast was ended, as they were returning, the boy Jesus stayed behind in Jerusalem. His parents did not know it'
                }
            },
            {
                id: 'JFI503',
                text: 'Mary and Joseph return looking for Him.',
                link: {
                    label: 'Lk. 2:45',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A45&version=RSVCE',
                    tip: 'and when they did not find him, they returned to Jerusalem, seeking him.'
                }
            },
            {
                id: 'JFI504',
                text: 'They find Jesus in the temple.',
                link: {
                    label: 'Lk. 2:46',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A46&version=RSVCE',
                    tip: 'After three days they found him in the temple, sitting among the teachers, listening to them and asking them questions;'
                }
            },
            {
                id: 'JFI505',
                text: 'Jesus was fulfilling the will of His Father.',
                link: {
                    label: 'Lk. 2:49',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A49&version=RSVCE',
                    tip: 'And he said to them, “How is it that you sought me? Did you not know that I must be in my Father’s house?”'
                }
            },
            {
                id: 'JFI506',
                text: 'The Holy Family returns to Nazareth.',
                link: {
                    label: 'Lk. 2:51',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A51&version=RSVCE',
                    tip: 'And he went down with them and came to Nazareth, and was obedient to them; and his mother kept all these things in her heart.'
                }
            },
            {
                id: 'JFI507',
                text: 'Jesus, the Son of God, obeys His parents.',
                link: {
                    label: 'Lk. 2:51',
                    url: 'https://www.biblegateway.com/passage/?search=Lk.%202%3A51&version=RSVCE',
                    tip: 'And he went down with them and came to Nazareth, and was obedient to them; and his mother kept all these things in her heart.'
                }
            },
            {
                id: 'JFI508',
                text: 'God tells us: Honor your father and your mother.',
                link: {
                    label: 'Mat. 15:4',
                    url: 'https://www.biblegateway.com/passage/?search=Mat.%2015%3A4&version=RSVCE',
                    tip: 'For God commanded, "Honor your father and your mother," and, "He who speaks evil of father or mother, let him surely die."'
                }
            },
            {
                id: 'JFI509',
                text: 'If you love Me, obey My commandments.',
                link: {
                    label: 'Jn. 14:15',
                    url: 'https://www.biblegateway.com/passage/?search=Jn.%2014%3A15&version=RSVCE',
                    tip: '“If you love me, you will keep my commandments.'
                }
            },
            {
                id: 'JFI510',
                text: 'Let us love in thought, in word, and in action.',
                link: {
                    label: '1 John 3:18',
                    url: 'https://www.biblegateway.com/passage/?search=1%20John%203%3A18&version=RSVCE',
                    tip: 'Little children, let us not love in word or speech but in deed and in truth.'
                }
            }
        ]
    }

    return {
        joyfulInsights
    }
})