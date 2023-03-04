<template>
    <div class="backdrop">
        <div class="modal">
            <p>Okay</p>
        </div>
    </div>
</template>
<style scoped>
.modal{
    width: 400px;
    padding: 20px;
    margin: 125px auto;
    background-color: white;
    border-radius: 10px;
}
.backdrop{
    top: 0;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.55);
    width: 100%;
    height: 100%;
}
</style>