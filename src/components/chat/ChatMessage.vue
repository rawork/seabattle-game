<template>
    <div>
        <span><a title="message.fullname" href="#">{{message.name}}</a>:</span> {{message.message}}
    </div>
</template>

<script>

const ChatMessage = {
  props: ['message']
}

export default ChatMessage
</script>