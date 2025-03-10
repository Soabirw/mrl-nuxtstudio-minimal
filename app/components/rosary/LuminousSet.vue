<script setup lang="ts">
const user = useUserStore()
const prayer = usePrayerStore()
</script>

<template>
  <div>
    <p>Announce “<span class="prayer-name">The First Luminous Mystery – The Baptism of the Lord</span>”</p>

    <p v-if="user.showMysterySummaries"></p>

    <p>Say the <span class="prayer-name">Our Father</span></p>

    <p v-if="user.showPrayerText">
      {{ prayer.ourFather }}
    </p>

    <p>Say ten <span class="prayer-name">Hail Marys</span> while meditating on the Mystery.</p>

    <p>Spiritual Fruit: <span class="prayer-name">Gratitude for the Gift of Faith</span></p>

    <ol v-if="user.showFocusInsights">
      <li>A voice cries out in the wilderness. Mk. 1:3</li>
      <li>John the Baptist preaches repentance. Mat. 3:1-2</li>
      <li>John proclaims that One is coming “the thong of whose sandals I am not worthy to unloose.” Mk. 1:7</li>
      <li>Jesus approaches John to be baptized. Mat. 3:13</li>
      <li>John protests that Jesus should be the one baptizing him instead. Mat. 3:14</li>
      <li>Jesus answers that it must be so for now. Mat. 3:15</li>
      <li>The heavens open; the Spirit descends. Mat. 3:16</li>
      <li>A voice from heaven says, “This is my beloved Son, in whom I am well pleased.” Mat. 3:17</li>
      <li>There is One Lord, One Faith, One Baptism. Eph. 4:5</li>
      <li>We were baptized into His death in order to be raised to new life in Him. Rm. 6:4</li>
    </ol>

    <p>Close decade with <span class="prayer-name">Glory Be</span></p>

    <p v-if="user.showPrayerText">{{ prayer.gloryBe }}</p>

    <p><span class="prayer-name">Oh My Jesus (Fatima, optional)</span></p>

    <p v-if="user.showPrayerText">{{ prayer.fatimaOhMyJesus }}</p>

    <p>Announce “<span class="prayer-name">The Second Luminous Mystery – The Wedding in Cana</span>”</p>

    <p v-if="user.showMysterySummaries"></p>

    <p>Say the <span class="prayer-name">Our Father</span></p>

    <p v-if="user.showPrayerText">
      {{ prayer.ourFather }}
    </p>

    <p>Say ten <span class="prayer-name">Hail Marys</span> while meditating on the Mystery.</p>

    <p>Spiritual Fruit: <span class="prayer-name">Fidelity</span></p>

    <ol v-if="user.showFocusInsights">
      <li>There was a marriage in Cana in Galilee. Jn. 2:1</li>
      <li>The wine runs out. Mary intercedes. Jn. 2:3</li>
      <li>Jesus replies that His hour has not yet come. Jn. 2:4</li>
      <li>Mary tells the servants to do whatever He asks. Jn. 2:5</li>
      <li>Jesus asks the jars of water be filled. Jn. 2:6</li>
      <li>The steward marvels that the best wine has been served last. Jn. 2:10</li>
      <li>This was the first of His signs. Jn. 2:11</li>
      <li>“I will espouse thee to Me in faith.” Hos. 2:20</li>
      <li>“Husbands, love your wives, as Christ also loved the Church” Eph. 5:25</li>
      <li>“Blessed are they that are called to the marriage supper of the Lamb.” Rev. 19:9</li>
    </ol>

    <p>Close decade with <span class="prayer-name">Glory Be</span></p>

    <p v-if="user.showPrayerText">{{ prayer.gloryBe }}</p>

    <p><span class="prayer-name">Oh My Jesus (Fatima, optional)</span></p>

    <p v-if="user.showPrayerText">{{ prayer.fatimaOhMyJesus }}</p>

    <p>Announce “<span class="prayer-name">The Third Luminous Mystery – The Proclamation of the Kingdom of God and the call to conversion</span>”</p>

    <p v-if="user.showMysterySummaries"></p>

    <p>Say the <span class="prayer-name">Our Father</span></p>

    <p v-if="user.showPrayerText">
      {{ prayer.ourFather }}
    </p>

    <p>Say ten <span class="prayer-name">Hail Marys</span> while meditating on the Mystery.</p>

    <p>Spiritual Fruit: <span class="prayer-name">Christian Witness</span></p>

    <ol v-if="user.showFocusInsights">
      <li>Jesus proclaims, “The Kingdom of God is at hand: repent, and believe the Gospel.” Mk. 1:15</li>
      <li>Jesus preaches the Kingdom in Galilee. Mat. 4:23</li>
      <li>Jesus teaches the Beatitudes to the crowds. Mat. 5:1-12</li>
      <li>Jesus commands His believers to be salt of the earth and the light of the world. Mat. 5:13-16</li>
      <li>It is not enough to say “Lord, Lord,” but one must do the will of the Father. Mat. 7:21-23</li>
      <li>Jesus sends His disciples to preach and say, “The kingdom of heaven is at hand.” Mat. 10:7</li>
      <li>“To other cities also I must preach the kingdom of God: for therefore am I sent.” Lk. 4:43</li>
      <li>If we do not receive the kingdom of God like a little child, neither shall we enter it. Mk. 10:15</li>
      <li>Jesus sends the disciples out to preach the kingdom and heal the sick. Lk. 9:2</li>
      <li>The Apostles preach the Risen Christ. Acts 2:32</li>
    </ol>

    <p>Close decade with <span class="prayer-name">Glory Be</span></p>

    <p v-if="user.showPrayerText">{{ prayer.gloryBe }}</p>

    <p><span class="prayer-name">Oh My Jesus (Fatima, optional)</span></p>

    <p v-if="user.showPrayerText">{{ prayer.fatimaOhMyJesus }}</p>

    <p>Announce “<span class="prayer-name">The Fourth Luminous Mystery – The Transfiguration</span>”</p>

    <p v-if="user.showMysterySummaries"></p>

    <p>Say the <span class="prayer-name">Our Father</span></p>

    <p v-if="user.showPrayerText">
      {{ prayer.ourFather }}
    </p>

    <p>Say ten <span class="prayer-name">Hail Marys</span> while meditating on the Mystery.</p>

    <p>Spiritual Fruit: <span class="prayer-name">Spiritual Courage</span></p>

    <ol v-if="user.showFocusInsights">
      <li>Jesus takes Peter, James, and John up to a high mountain by themselves. Mat. 17:1</li>
      <li>He is transfigured before them; His face shines like the sun, and His garments shine like light. Mat. 17:2</li>
      <li>Suddenly, Moses and Elijah appear. Mk. 9:4</li>
      <li>Peter asks to build three tents. Mat. 17:4</li>
      <li>As Peter speaks, a cloud descends over them, and the apostles become afraid. Luke 9:34</li>
      <li>A voice proclaims of Jesus: “This is My beloved Son, in whom I am well pleased. Listen to Him.” Mat. 17:5</li>
      <li>The disciples become utterly terrified. Mat. 17:6</li>
      <li>Jesus tells His disciples to rise, and to not be afraid. Mat. 17:7</li>
      <li>As we share in Christ’s sufferings, so shall we share in His glory. 1 Peter 4:13-16</li>
      <li>The disciples rejoice to be found worthy to suffer for the sake of His name. Acts 5:41</li>
    </ol>

    <p>Close decade with <span class="prayer-name">Glory Be</span></p>

    <p v-if="user.showPrayerText">{{ prayer.gloryBe }}</p>

    <p><span class="prayer-name">Oh My Jesus (Fatima, optional)</span></p>

    <p v-if="user.showPrayerText">{{ prayer.fatimaOhMyJesus }}</p>

    <p>Announce “<span class="prayer-name">The Fifth Luminous Mystery – The Institution of the Eucharist</span>”</p>

    <p v-if="user.showMysterySummaries"></p>

    <p>Say the <span class="prayer-name">Our Father</span></p>

    <p v-if="user.showPrayerText">
      {{ prayer.ourFather }}
    </p>

    <p>Say ten <span class="prayer-name">Hail Marys</span> while meditating on the Mystery.</p>

    <p>Spiritual Fruit: <span class="prayer-name">Love of Our Eucharistic Lord</span></p>

    <ol v-if="user.showFocusInsights">
      <li>The Feast of Unleavened Bread, also called the Passover, drew near. Lk. 22:1</li>
      <li>Jesus sends His disciples to make preparations for the Passover. Mat. 26:17-18</li>
      <li>When evening arrives, Jesus reclines at table with them. Mat. 26:19-20</li>
      <li>Jesus tells the disciples that He will not share in the Passover again until all is fulfilled. Lk. 22:16</li>
      <li>Our Lord washes the feet of His disciples. Jn. 13:5-6</li>
      <li>Jesus took the bread, broke it, and gave it to His disciples, saying “This is My Body.” Lk. 22:19</li>
      <li>In a similar way, He took the chalice and said, “This is My Blood.” Lk. 22:20</li>
      <li>“Amen, amen, I say unto you: Except that you eat of the flesh of the Son of Man, and drink His blood, you shall not have life in you.” Jn. 6:53</li>
      <li>For the chalice and bread is a communion in the blood and body of the Lord. 1 Cor. 10:16</li>
      <li>When we eat this bread, and drink this cup, we proclaim His death, until He comes. 1 Cor. 11:26</li>
    </ol>

    <p>Close decade with <span class="prayer-name">Glory Be</span></p>

    <p v-if="user.showPrayerText">{{ prayer.gloryBe }}</p>

    <p><span class="prayer-name">Oh My Jesus (Fatima, optional)</span></p>

    <p v-if="user.showPrayerText">{{ prayer.fatimaOhMyJesus }}</p>
  </div>
</template>

<style scoped>

</style>