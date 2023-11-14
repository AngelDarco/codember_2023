# Codember 2023

![codember](https://github.com/AngelDarco/codember_2023/assets/29819444/2c2e02b5-3cca-42cd-89a1-c956541903e3)

## [Codember](https://codember.dev/) 2023 - challenges solved and secrets hints.

_created by [@midudev](https://github.com/midudev/)_

### . [Codember](https://codember.dev/)

### . [Challenges](#challenges)

### . [Secrets](#secrets)

## Challenges

> ### `CHALLENGE_01:`

> **[NodeJs - solution](./CHALLENGE_01.js)**

> _[Test](./CHALLENGE_01.test.js)_

> ### `CHALLENGE_02:`

> **[NodeJs - solution](./CHALLENGE_02.js)**

> _[Test](./CHALLENGE_02.test.js)_

#

## Secrets

- 01 -
  <a href="javascript:void(0);" onclick="toggleText('He is a CEO')">Hint</a>
- 02 -
  <a href="javascript:void(0);" onclick="toggleText('Use the <b>email</b> command')">Hint</a>
- 03 -
  <a href="javascript:void(0);" onclick="toggleText('The <b>Konami</b> Code was created by Kazuhisa Hashimoto. ')">Hint</a>

<div id="hiddenText" style="display:none; width: 100%; text-align: center; height: 100px"></div>

<script>
function toggleText(text) {
  const hiddenText = document.getElementById("hiddenText");
  hidenText.innerHTML = text;
  hiddenText.style.display = (hiddenText.style.display === "none") ? "block" : "none";
}
</script>
