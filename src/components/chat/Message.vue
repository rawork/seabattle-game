<template>
    <div>
        <span><a :title="message.lastname" href="#">{{message.name}}</a>:</span> {{message.message}}
    </div>
</template>

<script>

const Message = {
  props: ['message'],
  name: 'message'
}

export default Message
</script>