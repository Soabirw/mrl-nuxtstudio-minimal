<script setup lang="ts">
const user = useUserStore()
const prayer = usePrayerStore()
</script>

<template>
  <div>
    <p>Announce “<span class="prayer-name">The First Joyful Mystery – The Annunciation of the Lord to Mary</span>”</p>

    <p v-if="user.showMysterySummaries"></p>

    <p>Say the <span class="prayer-name">Our Father</span></p>

    <p v-if="user.showPrayerText">
      {{ prayer.ourFather }}
    </p>

    <p>Say ten <span class="prayer-name">Hail Marys</span> while meditating on the Mystery.</p>

    <p>Spiritual Fruit: <span class="prayer-name">Humility</span></p>

    <ol v-if="user.showFocusInsights">
      <li>Through the disobedience of Adam sin enters the world. <a href="#">Rom. 5:12</a></li>
      <li>The Father sends His Son to save the world. <a href="#">Jn. 3:17</a></li>
      <li>The Angel Gabriel is sent to a virgin named Mary. <a href="#">Lk. 1:26,27</a></li>
      <li>The Angel tells Mary: “You are to have a Son and will name Him Jesus.” <a href="#">Lk. 1:31</a></li>
      <li>He is the Son of God. <a href="#">Lk. 1:32</a></li>
      <li>Mary consents: “Let it be done to me.” <a href="#">Lk. 1:38</a></li>
      <li>God the Son becomes Man, in obedience to His Father. <a href="#">Lk. 1:35</a></li>
      <li>By His obedience many shall be saved. <a href="#">Rom. 5:19</a></li>
      <li>Mary becomes Mother of God. <a href="#">Lk. 1:35</a></li>
      <li>Nothing is impossible with God. <a href="#">Lk. 1:37</a></li>
    </ol>

    <p>Close decade with <span class="prayer-name">Glory Be</span></p>

    <p v-if="user.showPrayerText">{{ prayer.gloryBe }}</p>

    <p><span class="prayer-name">Oh My Jesus (Fatima, optional)</span></p>

    <p v-if="user.showPrayerText">{{ prayer.fatimaOhMyJesus }}</p>

    <p>Announce “<span class="prayer-name">The Second Joyful Mystery – The Visitation of Our Lady with St. Elizabeth</span>”</p>

    <p v-if="user.showMysterySummaries"></p>

    <p>Say the <span class="prayer-name">Our Father</span></p>

    <p v-if="user.showPrayerText">
      {{ prayer.ourFather }}
    </p>

    <p>Say ten <span class="prayer-name">Hail Marys</span> while meditating on the Mystery.</p>

    <p>Spiritual Fruit: <span class="prayer-name">Love Others</span></p>

    <ol v-if="user.showFocusInsights">
      <li>Mary visits her elderly cousin Elizabeth. Lk. 1:40</li>
      <li>Elizabeth is with child. His name is John. Lk. 1:13</li>
      <li>She greets Mary: “Blessed are you because you believed.” Lk. 1:45</li>
      <li>Mary herself is with Child, through the Holy Spirit. Mat. 1:18</li>
      <li>She answers: “My soul proclaims the greatness of the Lord.” Lk. 1:46</li>
      <li>“His mercy reaches from age to age.” Lk. 1:50</li>
      <li>Mary, the Mother of God, stays to help Elizabeth. Lk. 1:56</li>
      <li>After three months Mary returns to her home in Nazareth. Lk. 1:56</li>
      <li>Do good to all. Galat. 6:10</li>
      <li>Be at peace with everyone. Rom. 12:18</li>
    </ol>

    <p>Close decade with <span class="prayer-name">Glory Be</span></p>

    <p v-if="user.showPrayerText">{{ prayer.gloryBe }}</p>

    <p><span class="prayer-name">Oh My Jesus (Fatima, optional)</span></p>

    <p v-if="user.showPrayerText">{{ prayer.fatimaOhMyJesus }}</p>

    <p>Announce “<span class="prayer-name">The Third Joyful Mystery – The Nativity of Our Lord</span>”</p>

    <p v-if="user.showMysterySummaries"></p>

    <p>Say the <span class="prayer-name">Our Father</span></p>

    <p v-if="user.showPrayerText">
      {{ prayer.ourFather }}
    </p>

    <p>Say ten <span class="prayer-name">Hail Marys</span> while meditating on the Mystery.</p>

    <p>Spiritual Fruit: <span class="prayer-name">Poverty</span></p>

    <ol v-if="user.showFocusInsights">
      <li>In Bethlehem will be born He Who is to rule my people. Micah 5:2</li>
      <li>Joseph and Mary leave Nazareth to register in Bethlehem. Lk. 2:4</li>
      <li>There, Mary gives birth to the Son of God. Lk. 2:7</li>
      <li>Mary lays Him in a manger, because there is no room for Him in the inn. Lk. 2:7</li>
      <li>Angels announce to shepherds nearby: “The Savior is born.” Lk. 2:10,11</li>
      <li>Angels sing: “Peace to men of good will.” Lk. 2:14</li>
      <li>Wise men come from the East in search of Christ. Mat. 2:1,2</li>
      <li>Entering the house in Bethlehem, they worship Him. Mat. 2:11</li>
      <li>All nations serve Him. Ps. 72:11</li>
      <li>Those who accept Christ become children of God. Jn. 1:12</li>
    </ol>

    <p>Close decade with <span class="prayer-name">Glory Be</span></p>

    <p v-if="user.showPrayerText">{{ prayer.gloryBe }}</p>

    <p><span class="prayer-name">Oh My Jesus (Fatima, optional)</span></p>

    <p v-if="user.showPrayerText">{{ prayer.fatimaOhMyJesus }}</p>

    <p>Announce “<span class="prayer-name">The Fourth Joyful Mystery – The Presentation of the Christ Child in the Temple</span>”</p>

    <p v-if="user.showMysterySummaries"></p>

    <p>Say the <span class="prayer-name">Our Father</span></p>

    <p v-if="user.showPrayerText">
      {{ prayer.ourFather }}
    </p>

    <p>Say ten <span class="prayer-name">Hail Marys</span> while meditating on the Mystery.</p>

    <p>Spiritual Fruit: <span class="prayer-name">Obedience</span></p>

    <ol v-if="user.showFocusInsights">
      <li>When the Child Jesus is eight days old, He is circumcised. Lk. 2:21</li>
      <li>And his parents name Him Jesus. Lk. 2:21</li>
      <li>The name of Jesus is the only name by which we can be saved. Acts 4:12</li>
      <li>“Ask the Father anything in My Name. He will give it to you.” Jn. 16:23</li>
      <li>Lord, You are good and forgiving to all who call upon Your Name. Ps. 86:5</li>
      <li>Joseph and Mary take Jesus to Jerusalem to present Him to God. Lk. 2:22</li>
      <li>Simeon, a holy man, foretells: “This Child is destined for the fall and rise of many.” Lk. 2:34</li>
      <li>“Your own soul a sword shall pierce.” Lk. 2:35</li>
      <li>Joseph and Mary take Jesus to their hometown of Nazareth. Lk. 2:39</li>
      <li>Whatever you do, do all in the Name of Jesus. Col. 3:17</li>
    </ol>

    <p>Close decade with <span class="prayer-name">Glory Be</span></p>

    <p v-if="user.showPrayerText">{{ prayer.gloryBe }}</p>

    <p><span class="prayer-name">Oh My Jesus (Fatima, optional)</span></p>

    <p v-if="user.showPrayerText">{{ prayer.fatimaOhMyJesus }}</p>

    <p>Announce “<span class="prayer-name">The Fifth Joyful Mystery – The Finding of the Child Jesus in the Temple</span>”</p>

    <p v-if="user.showMysterySummaries"></p>

    <p>Say the <span class="prayer-name">Our Father</span></p>

    <p v-if="user.showPrayerText">
      {{ prayer.ourFather }}
    </p>

    <p>Say ten <span class="prayer-name">Hail Marys</span> while meditating on the Mystery.</p>

    <p>Spiritual Fruit: <span class="prayer-name">Joy in Finding Jesus</span></p>

    <ol v-if="user.showFocusInsights">
      <li>Jesus is twelve years old, and goes to Jerusalem with Mary and Joseph. Lk. 2:42</li>
      <li>Jesus remains in Jerusalem. His parents do not realize it. Lk. 2:43</li>
      <li>Mary and Joseph return looking for Him. Lk. 2:45</li>
      <li>They find Jesus in the temple. Lk. 2:46</li>
      <li>Jesus was fulfilling the will of His Father. Lk. 2:49</li>
      <li>The Holy Family returns to Nazareth. Lk. 2:51</li>
      <li>Jesus, the Son of God, obeys His parents. Lk. 2:51</li>
      <li>God tells us: Honor your father and your mother. Mat. 15:4</li>
      <li>If you love Me, obey My commandments. Jn. 14:15</li>
      <li>Let us love in thought, in word, and in action. 1 John 3:18</li>
    </ol>

    <p>Close decade with <span class="prayer-name">Glory Be</span></p>

    <p v-if="user.showPrayerText">{{ prayer.gloryBe }}</p>

    <p><span class="prayer-name">Oh My Jesus (Fatima, optional)</span></p>

    <p v-if="user.showPrayerText">{{ prayer.fatimaOhMyJesus }}</p>
  </div>
</template>

<style scoped>

</style>