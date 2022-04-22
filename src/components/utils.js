const utils = {
    async getFields(template) {
        try {
            const response = await fetch(`https://mailmergev2.azurewebsites.net/getfields/` + template);
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                const fields = await response.json();
                return fields;
            }
        } catch (error) {
            console.log(error);
        }
    },

    async getTemplatesName() {
        try {
            const response = await fetch('https://mailmergev2.azurewebsites.net/list');
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                const templates = await response.json();
                for (let i = 0; i < templates.length; i++) {
                    templates[i] = templates[i].substring(10);
                }
                return templates;
            }
        } catch (error) {
            console.log(error);
        }
    },

    async getTemplate(template) {
        try {
            const response = await fetch(`https://mailmergev2.azurewebsites.net/getcode/` + template);
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                const template = await response.json();
                return template;
            }
        } catch (error) {
            console.log(error);
        }
    }
}



export default utils;