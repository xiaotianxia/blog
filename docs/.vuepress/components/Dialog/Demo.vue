<template>
    <div class="dialog-wrapper">
        <dialog id="favDialog">
            <form method="dialog" id="form">
                <section>
                    <p>
                        <label for="favAnimal">Favorite animal:</label>
                        <select id="favAnimal">
                            <option></option>
                            <option>Brine shrimp</option>
                            <option>Red panda</option>
                            <option>Spider monkey</option>
                        </select>
                    </p>
                </section>

                <menu>
                    <button id="cancel" type="reset">Cancel</button>
                    <button id="submit" type="submit">Confirm</button>
                </menu>
            </form>
        </dialog>

        <menu>
            <button id="updateDetails">Update details</button>
        </menu>
    </div>
</template>

<script>

export default {
    mounted () {
        var updateButton = document.getElementById('updateDetails');
        var cancelButton = document.getElementById('cancel');
        var favDialog = document.getElementById('favDialog');
        var form = document.getElementById('form');

        form.addEventListener('submit', function(e) {
            console.log(favDialog.returnValue)
        });

        updateButton.addEventListener('click', function() {
            favDialog.showModal();
        });

        cancelButton.addEventListener('click', function() {
            favDialog.close('hhhh');
        });

        favDialog.addEventListener('close', () => {
            console.log(favDialog.returnValue);
        });
    }
}
</script>

<style scoped>
    .dialog-wrapper {

    }
</style>