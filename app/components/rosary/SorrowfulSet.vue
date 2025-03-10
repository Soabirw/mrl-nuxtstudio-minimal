<script setup lang="ts">
const user = useUserStore()
const prayer = usePrayerStore()
</script>

<template>
  <div>
    <p>Announce “<span class="prayer-name">The First Sorrowful Mystery – The Agony in the Garden</span>”</p>

    <p v-if="user.showMysterySummaries"></p>

    <p>Say the <span class="prayer-name">Our Father</span></p>

    <p v-if="user.showPrayerText">
      {{ prayer.ourFather }}
    </p>

    <p>Say ten <span class="prayer-name">Hail Marys</span> while meditating on the Mystery.</p>

    <p>Spiritual Fruit: <span class="prayer-name">Sorrow for Sin</span></p>

    <ol v-if="user.showFocusInsights">
      <li>Jesus and His Apostles go to Gethsemane to pray. Mat. 26:36</li>
      <li>With Peter, James and John, He enters the olive grove. Mat. 26:37</li>
      <li>“My soul is sorrowful unto death.” Mat. 26:38</li>
      <li>“Father, if it be Thy will, let this cup pass from Me.” Mat. 26:39</li>
      <li>“Yet, not My will, but Thine be done.” Mat. 26:39</li>
      <li>“Could you not watch one hour with Me?” Mat. 26:40</li>
      <li>“Watch and pray that you enter not into temptation.” Mat. 26:41</li>
      <li>Judas betrays Jesus with a kiss. Mat. 26:48</li>
      <li>“Having seized Jesus, they led Him away to the high priest’s house.” Lk. 22:54</li>
      <li>His disciples abandon Him. Mat. 26:56</li>
    </ol>

    <p>Close decade with <span class="prayer-name">Glory Be</span></p>

    <p v-if="user.showPrayerText">{{ prayer.gloryBe }}</p>

    <p><span class="prayer-name">Oh My Jesus (Fatima, optional)</span></p>

    <p v-if="user.showPrayerText">{{ prayer.fatimaOhMyJesus }}</p>

    <p>Announce “<span class="prayer-name">The Second Sorrowful Mystery – The Scourging at the Pillar</span>”</p>

    <p v-if="user.showMysterySummaries"></p>

    <p>Say the <span class="prayer-name">Our Father</span></p>

    <p v-if="user.showPrayerText">
      {{ prayer.ourFather }}
    </p>

    <p>Say ten <span class="prayer-name">Hail Marys</span> while meditating on the Mystery.</p>

    <p>Spiritual Fruit: <span class="prayer-name">Purity</span></p>

    <ol v-if="user.showFocusInsights">
      <li>Before the high priest Annas, one of the guards strikes Jesus in the face. Jn. 18:22</li>
      <li>Annas sends Jesus, bound, to the high priest Caiphas. Jn. 18:24</li>
      <li>They sought false witnesses against Jesus that they might put Him to death. Mat. 26:59</li>
      <li>Peter denies three times that he is a disciple of Jesus. Jn. 18:17,25,27</li>
      <li>Jesus is brought before Pilate, for only he can issue a death sentence. Jn. 18:31</li>
      <li>Pilate can find no guilt in Jesus. Jn. 18:39</li>
      <li>To appease the Jews, Pilate has Jesus scourged. Jn. 19:1</li>
      <li>“It was our infirmities that He bore, our sufferings that He endured.” Isaiah 53:4</li>
      <li>“He was pierced for our offenses, crushed for our sins.” Isaiah 53:5</li>
      <li>“By His stripes we were healed.” Isaiah 53:5</li>
    </ol>

    <p>Close decade with <span class="prayer-name">Glory Be</span></p>

    <p v-if="user.showPrayerText">{{ prayer.gloryBe }}</p>

    <p><span class="prayer-name">Oh My Jesus (Fatima, optional)</span></p>

    <p v-if="user.showPrayerText">{{ prayer.fatimaOhMyJesus }}</p>

    <p>Announce “<span class="prayer-name">The Third Sorrowful Mystery – The Crowning with Thorns</span>”</p>

    <p v-if="user.showMysterySummaries"></p>

    <p>Say the <span class="prayer-name">Our Father</span></p>

    <p v-if="user.showPrayerText">
      {{ prayer.ourFather }}
    </p>

    <p>Say ten <span class="prayer-name">Hail Marys</span> while meditating on the Mystery.</p>

    <p>Spiritual Fruit: <span class="prayer-name">Courage</span></p>

    <ol v-if="user.showFocusInsights">
      <li>Jesus answers Pilate that He is a king, but His kingdom is not of this world. Jn. 18:36</li>
      <li>In mockery the soldiers place a crown of thorns on His head. Mat. 27:29</li>
      <li>They put a reed in His right hand, a symbol of authority. Mat. 27:29</li>
      <li>They kneel before Him in derision: “Hail, King of the Jews.” Mat. 27:29</li>
      <li>They spit on Him and taking the reed, strike Him on the head. Mat. 27:30</li>
      <li>Pilate presents Jesus to the crowd and says “Behold the Man.” Jn. 19:5</li>
      <li>The crowd shouts: “Crucify Him! Crucify Him!” Jn. 19:6</li>
      <li>Pilate asks: “Shall I crucify your King?” Jn. 19:15</li>
      <li>They respond: “We have no king but Caesar.” Jn. 19:15</li>
      <li>“Though He was harshly treated, He submitted, and opened not His mouth.” Isaiah 53:7</li>
    </ol>

    <p>Close decade with <span class="prayer-name">Glory Be</span></p>

    <p v-if="user.showPrayerText">{{ prayer.gloryBe }}</p>

    <p><span class="prayer-name">Oh My Jesus (Fatima, optional)</span></p>

    <p v-if="user.showPrayerText">{{ prayer.fatimaOhMyJesus }}</p>

    <p>Announce “<span class="prayer-name">The Fourth Sorrowful Mystery – The Carrying of the Cross</span>”</p>

    <p v-if="user.showMysterySummaries"></p>

    <p>Say the <span class="prayer-name">Our Father</span></p>

    <p v-if="user.showPrayerText">
      {{ prayer.ourFather }}
    </p>

    <p>Say ten <span class="prayer-name">Hail Marys</span> while meditating on the Mystery.</p>

    <p>Spiritual Fruit: <span class="prayer-name">Patience</span></p>

    <ol v-if="user.showFocusInsights">
      <li>Jesus carries His Cross to Calvary. Jn. 19:17</li>
      <li>“He who does not carry his cross and follow Me, cannot be My disciple.” Lk. 14:27</li>
      <li>“Take My yoke upon you… your souls will find rest.” Mat. 11:29</li>
      <li>“My yoke is easy, and My burden light.” Mat. 11:30</li>
      <li>“He who loses his life for My sake will find it.” Mat. 10:39</li>
      <li>What we suffer now can never compare to the glory that awaits us. Rom. 8:18</li>
      <li>Simon the Cyrenean helps Jesus carry the Cross to Calvary. Lk. 23:26</li>
      <li>“Weep not for Me, but for your children.” Lk. 23: 28</li>
      <li>“God forbid that I should glory, save in the cross of Christ.” Galat. 6:14</li>
      <li>The worldly person is an “enemy of the Cross of Christ.” Phil. 3:18</li>
    </ol>

    <p>Close decade with <span class="prayer-name">Glory Be</span></p>

    <p v-if="user.showPrayerText">{{ prayer.gloryBe }}</p>

    <p><span class="prayer-name">Oh My Jesus (Fatima, optional)</span></p>

    <p v-if="user.showPrayerText">{{ prayer.fatimaOhMyJesus }}</p>

    <p>Announce “<span class="prayer-name">The Fifth Sorrowful Mystery – The Crucifixion</span>”</p>

    <p v-if="user.showMysterySummaries"></p>

    <p>Say the <span class="prayer-name">Our Father</span></p>

    <p v-if="user.showPrayerText">
      {{ prayer.ourFather }}
    </p>

    <p>Say ten <span class="prayer-name">Hail Marys</span> while meditating on the Mystery.</p>

    <p>Spiritual Fruit: <span class="prayer-name">Perseverance</span></p>

    <ol v-if="user.showFocusInsights">
      <li>Jesus is nailed to the Cross. Lk. 23:33</li>
      <li>He prays: “Father, forgive them…” Lk. 23:34</li>
      <li>Jesus says to the repentant thief: “This day you will be with Me in paradise.” Lk. 23:43</li>
      <li>Looking down at Mary His Mother, He says: “Woman, there is your son.” Jn. 19:26</li>
      <li>Looking at the beloved disciple, He says: “There is your Mother.” Jn. 19:27</li>
      <li>Jesus endures the terrible torture of the Cross for three hours. Mat. 27:45</li>
      <li>Nature itself seemed in mourning, for darkness covered the earth. Mat. 27:45</li>
      <li>“There is no greater love than this: to lay down one’s life for one’s friends.” Jn. 15:13</li>
      <li>Having completed His redeeming mission, Jesus cried out: “It is finished.” Jn. 19:30</li>
      <li>“Father, into Your hands, I commend My spirit.” Lk. 23:46</li>
    </ol>

    <p>Close decade with <span class="prayer-name">Glory Be</span></p>

    <p v-if="user.showPrayerText">{{ prayer.gloryBe }}</p>

    <p><span class="prayer-name">Oh My Jesus (Fatima, optional)</span></p>

    <p v-if="user.showPrayerText">{{ prayer.fatimaOhMyJesus }}</p>
  </div>
</template>

<style scoped>

</style>