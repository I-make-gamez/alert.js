var ans;
function alert(type, title, text) {
    switch (type) {
        case 'alert':
            // Create alert elements
            var alertContainer = document.createElement("section");
            var alertTitle = document.createElement("h2");
            var alertText = document.createElement("h5");
            var alertClose = document.createElement("button");

            // Give Text elements innerHTML
            alertTitle.innerHTML = title;
            alertText.innerHTML = text;
            alertClose.innerHTML = "okay"

            // Add classes
            alertContainer.classList.add('alert')
            alertTitle.classList.add('title')
            alertText.classList.add('text')
            alertClose.classList.add('btnClose')

            // Add styling
            alertContainer.style.backgroundColor = "inherit"
            alertContainer.style.width = "auto"
            alertContainer.style.maxWidth = "500px"
            alertContainer.style.height = "auto"
            alertContainer.style.maxHeight = "750px"
            alertContainer.style.border = "2px solid #000"
            alertContainer.style.position = "absolute"
            alertContainer.style.left = "50%"
            alertContainer.style.top = "50%"
            alertContainer.style.transform = "translate(-50%, -50%)"
            alertContainer.style.zIndex = 99999999

            alertTitle.style.margin = "0px"
            alertTitle.style.paddingBottom = "25px;"
            alertTitle.style.marginBottom = "25px;"
            alertTitle.style.borderBottom = "2px solid #000"

            // Move text and title into alertContainer
            alertContainer.appendChild(alertTitle)
            alertContainer.appendChild(alertText)
            alertContainer.appendChild(alertClose)

            // Move alertContainer and it's children into the DOM
            document.body.appendChild(alertContainer)

            // Event listener
            alertClose.addEventListener('click', () => {
                alertContainer.remove()
            })
            break;
        case 'prompt':
            // Create alert elements
            var promptContainer = document.createElement("section");
            var promptTitle = document.createElement("h2");
            var promptText = document.createElement("h5");
            var promptControl = document.createElement("div")
            var promptYes = document.createElement('button')
            var promptNo = document.createElement('button')

            // Give Text elements innerHTML
            promptTitle.innerHTML = title;
            promptText.innerHTML = text;
            promptYes.innerHTML = "Yes"
            promptNo.innerHTML = "No"

            // Add classes
            promptContainer.classList.add('alert')
            promptTitle.classList.add('title')
            promptText.classList.add('text')
            promptYes.classList.add('promptYes')
            promptNo.classList.add('promptNo')


            // Add styling
            promptContainer.style.backgroundColor = "inherit"
            promptContainer.style.width = "auto"
            promptContainer.style.maxWidth = "500px"
            promptContainer.style.height = "auto"
            promptContainer.style.maxHeight = "750px"
            promptContainer.style.border = "2px solid #000"
            promptContainer.style.position = "absolute"
            promptContainer.style.left = "50%"
            promptContainer.style.top = "50%"
            promptContainer.style.transform = "translate(-50%, -50%)"
            promptContainer.style.zIndex = 99999999

            promptTitle.style.margin = "0px"
            promptTitle.style.paddingBottom = "25px;"
            promptTitle.style.marginBottom = "25px;"
            promptTitle.style.borderBottom = "2px solid #000"

            // Move text and title into alertContainer
            promptContainer.appendChild(promptTitle)
            promptContainer.appendChild(promptText)
            promptContainer.appendChild(promptControl)
            promptControl.appendChild(promptYes)
            promptControl.appendChild(promptNo)


            // Move alertContainer and it's children into the DOM
            document.body.appendChild(promptContainer)

            // Event listeners
            promptYes.addEventListener('click', () => {
                promptContainer.remove()
                ans = true;
                return true;
            })
            promptNo.addEventListener('click', () => {
                promptContainer.remove()
                ans = false;
                return false;
            })
            break;
        default:
            console.error("Alert.js (Code: 1) : alert not recognized.")
    }
}

function alertClose() {
}