<template>
    <div class="user-target">
        <Target />
        <GoodsList />
        <Order />
        <Link />
    </div>
</template>

<script>
import Target from '@/components/pages/targetUser/target'
import GoodsList from '@/components/pages/targetUser/goodsList'
import Order from '@/components/pages/targetUser/order'
import Link from '@/components/pages/index/link'

export default {
  name: "UserTarget",
  components: {
      Target,
      GoodsList,
      Order,
      Link
  }
}
</script>

<style>

</style>
