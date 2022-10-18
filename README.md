# Request Script | BOT (Telegram)
Script which send messages from web-site on Telegram.
---
### How to integrate the script:
```
<script data-main="request-script/main.js" src="request-script/scripts/require.min.js"></script>
```
---
### You can change script config (scriptConfig.js):
```
const botConfig = {
    env: 'dev', // If you want to get fetch results, or warnings: dev, else: prod
    fieldTag: 'ex', // Tag for fields which will in message
    token: '5427993384:AAFpfHkrxcNGkCyln6AOQwpk0OSojWt4EhU', // Bot Token who will send messages
    chatId: '-892811467' // Chat ID (Group, Channel) which will get messages
}
```
---
### You can add fields in message with HTML attributes:
```
<input name="ex-address" data-text="Address" data-smile="📃" value="#">

<select name="ex-currency" data-text="Crypto Currency" data-smile="💲" value="#">
    <option value="bitcoin">Bitcoin</option>
    <option value="etherium">Etherium</option>
</select>

<textarea name="ex-question" data-text="Question" data-smile="❓" value="#"></textarea>
```
> **name="ex-address"** - 'ex' that field tag thanks to script collect fields, if you want create new field in message - simple create field with name which starts on your field tag ('ex')

> **data-text="Address"** - value of this attribute that field text which will in message

> **data-smile="📃"** - value of this attribute that smile which will before text in message

> **value="#"** - that value for text in message
