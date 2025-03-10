<script setup lang="ts">
const user = useUserStore()
const prayer = usePrayerStore()
</script>

<template>
  <div>
    <p>Announce “<span class="prayer-name">The First Glorious Mystery – The Resurrection of Jesus</span>”</p>

    <p v-if="user.showMysterySummaries"></p>

    <p>Say the <span class="prayer-name">Our Father</span></p>

    <p v-if="user.showPrayerText">
      {{ prayer.ourFather }}
    </p>

    <p>Say ten <span class="prayer-name">Hail Marys</span> while meditating on the Mystery.</p>

    <p>Spiritual Fruit: <span class="prayer-name">Faith</span></p>

    <ol v-if="user.showFocusInsights">
      <li>Jesus is risen from the dead. Lk. 24:6</li>
      <li>He appeared to the apostles and says: “Peace be with you.” Jn. 20:19</li>
      <li>He then appeared to more than five hundred at one time. 1 Cor. 15:6</li>
      <li>If Christ is not risen, then our faith is useless. 1 Cor 15:14</li>
      <li>Thomas declares: “Unless I see I will not believe.” Jn. 20:25</li>
      <li>“Blessed are they who have not seen and have believed.” Jn. 20:29</li>
      <li>“He who believes and is baptized will be saved.” Mk. 16:16</li>
      <li>Faith is a gift of God. Eph. 2:8</li>
      <li>“He who believes in Me will never die.” Jn. 11:26</li>
      <li>“Lord, I do believe, help my unbelief.” Mk. 9:23</li>
    </ol>

    <p>Close decade with <span class="prayer-name">Glory Be</span></p>

    <p v-if="user.showPrayerText">{{ prayer.gloryBe }}</p>

    <p><span class="prayer-name">Oh My Jesus (Fatima, optional)</span></p>

    <p v-if="user.showPrayerText">{{ prayer.fatimaOhMyJesus }}</p>

    <p>Announce “<span class="prayer-name">The Second Glorious Mystery – The Ascension of Jesus</span>”</p>

    <p v-if="user.showMysterySummaries"></p>

    <p>Say the <span class="prayer-name">Our Father</span></p>

    <p v-if="user.showPrayerText">
      {{ prayer.ourFather }}
    </p>

    <p>Say ten <span class="prayer-name">Hail Marys</span> while meditating on the Mystery.</p>

    <p>Spiritual Fruit: <span class="prayer-name">Hope</span></p>

    <ol v-if="user.showFocusInsights">
      <li>“I am going to My Father and your Father, to My God and your God.” Jn. 20:17</li>
      <li>“I go to prepare a place for you.” Jn. 14:2</li>
      <li>“That where I am, there you also may be.” Jn. 14:3</li>
      <li>“Make disciples of all nations.” Mat. 28:19</li>
      <li>“There shall be one fold and one shepherd.” Jn. 10:16</li>
      <li>“I am with you all days.” Mat. 28:20</li>
      <li>“You have not chosen Me, I have chosen you.” Jn. 15:16</li>
      <li>“I am the way, the Truth, and the Life.” Jn. 14:6</li>
      <li>Jesus ascends to the right hand of His Father. Mk. 16:19</li>
      <li>“I will draw all men to Myself.” Jn. 12:32</li>
    </ol>

    <p>Close decade with <span class="prayer-name">Glory Be</span></p>

    <p v-if="user.showPrayerText">{{ prayer.gloryBe }}</p>

    <p><span class="prayer-name">Oh My Jesus (Fatima, optional)</span></p>

    <p v-if="user.showPrayerText">{{ prayer.fatimaOhMyJesus }}</p>

    <p>Announce “<span class="prayer-name">The Third Glorious Mystery – The Descent of the Holy Spirit</span>”</p>

    <p v-if="user.showMysterySummaries"></p>

    <p>Say the <span class="prayer-name">Our Father</span></p>

    <p v-if="user.showPrayerText">
      {{ prayer.ourFather }}
    </p>

    <p>Say ten <span class="prayer-name">Hail Marys</span> while meditating on the Mystery.</p>

    <p>Spiritual Fruit: <span class="prayer-name">Love of God</span></p>

    <ol v-if="user.showFocusInsights">
      <li>The Apostles and Mary were together in prayer. Acts 2:1</li>
      <li>A sound from heaven filled the whole house. Acts 2:2</li>
      <li>Suddenly tongues of fire rested on each of them. Acts 2:3</li>
      <li>They were filled with the Holy Spirit. Acts 2:4</li>
      <li>Men of every nation understood them in their own language. Acts 2:6</li>
      <li>They were strengthened to preach the Gospel without fear. Acts 4:19</li>
      <li>Peter declared: “God has made both Lord and Messiah, this Jesus whom you crucified.” Acts 2:36</li>
      <li>You are children of God because of your faith in Jesus. Galat. 3:26</li>
      <li>Love one another. Jn. 15:12</li>
      <li>Love your enemies. Mat. 5:44</li>
    </ol>

    <p>Close decade with <span class="prayer-name">Glory Be</span></p>

    <p v-if="user.showPrayerText">{{ prayer.gloryBe }}</p>

    <p><span class="prayer-name">Oh My Jesus (Fatima, optional)</span></p>

    <p v-if="user.showPrayerText">{{ prayer.fatimaOhMyJesus }}</p>

    <p>Announce “<span class="prayer-name">The Fourth Glorious Mystery – The Assumption of Mary</span>”</p>

    <p v-if="user.showMysterySummaries"></p>

    <p>Say the <span class="prayer-name">Our Father</span></p>

    <p v-if="user.showPrayerText">
      {{ prayer.ourFather }}
    </p>

    <p>Say ten <span class="prayer-name">Hail Marys</span> while meditating on the Mystery.</p>

    <p>Spiritual Fruit: <span class="prayer-name">Mary as Our Mother</span></p>

    <ol v-if="user.showFocusInsights">
      <li>“You will not suffer your faithful one to undergo corruption.” Ps. 16:10</li>
      <li>“You are the glory of Jerusalem. You are the splendid boast of our people.” Jud. 15:9</li>
      <li>“Arise, My beloved, My beautiful one, and come.” S. of S. 2:10</li>
      <li>“You are all-beautiful... and there is no blemish in you.” S. of S. 4:7</li>
      <li>“The Queen takes her place at Your right hand.” Ps. 45: 10</li>
      <li>“Blessed are you, daughter... above all women on earth.” Jud. 13:18</li>
      <li>“Hail, full of grace, the Lord is with you.” Lk. 1:28</li>
      <li>If we are likened to Christ in His death, so shall we be in His resurrection. Rom. 6:5</li>
      <li>“I shall return to take you with Me.” Jn. 14:3</li>
      <li>“God’s temple in heaven opened, and there was seen the ark of His covenant.” Apoc. 11:19</li>
    </ol>

    <p>Close decade with <span class="prayer-name">Glory Be</span></p>

    <p v-if="user.showPrayerText">{{ prayer.gloryBe }}</p>

    <p><span class="prayer-name">Oh My Jesus (Fatima, optional)</span></p>

    <p v-if="user.showPrayerText">{{ prayer.fatimaOhMyJesus }}</p>

    <p>Announce “<span class="prayer-name">The Fifth Glorious Mystery – The Coronation of Mary as Queen of Heaven and Earth</span>”</p>

    <p v-if="user.showMysterySummaries"></p>

    <p>Say the <span class="prayer-name">Our Father</span></p>

    <p v-if="user.showPrayerText">
      {{ prayer.ourFather }}
    </p>

    <p>Say ten <span class="prayer-name">Hail Marys</span> while meditating on the Mystery.</p>

    <p>Spiritual Fruit: <span class="prayer-name">Mary as Our Queen and Lady</span></p>

    <ol v-if="user.showFocusInsights">
      <li>“A great sign appeared in heaven: a woman clothed with the sun.” Apoc. 12:1</li>
      <li>“The moon was under her feet, and on her head a crown of twelve stars.” Apoc. 12:1</li>
      <li>“In the highest heavens did I dwell, my throne on a pillar of cloud” Sirach 24:4</li>
      <li>“I am the mother of pure love” Sirach 24:24</li>
      <li>“I am the mother of knowledge.” Sirach 24:24</li>
      <li>“I am the mother of hope.” Sirach 24:24</li>
      <li>Mary is Queen Mother of Him who “shall reign in the house of Jacob forever.” Lk. 1:32</li>
      <li>“Those who seek Me find Me.” Prov. 8:17</li>
      <li>“He who serves Me will never fail.” Sirach 24:21</li>
      <li>“He who finds Me finds life.” Prov. 8:35</li>
    </ol>

    <p>Close decade with <span class="prayer-name">Glory Be</span></p>

    <p v-if="user.showPrayerText">{{ prayer.gloryBe }}</p>

    <p><span class="prayer-name">Oh My Jesus (Fatima, optional)</span></p>

    <p v-if="user.showPrayerText">{{ prayer.fatimaOhMyJesus }}</p>
  </div>
</template>

<style scoped>

</style>