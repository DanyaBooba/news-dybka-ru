const inputField = document.querySelector('input.search-input')

function textSearch() {
    return inputField.value
}

function useSearch() {
    if (!inputField) return

    if (inputField.value.length <= 0) return

    console.log(textSearch())
}

function useSearchOnInput() {
    useSearch()
}

useSearch()
