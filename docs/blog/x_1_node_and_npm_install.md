Installing nvm with [Windows installer](https://github.com/coreybutler/nvm-windows/releases)

### Too low
Can't rememer from which page I found the version number, but I installed node 5.4
```
λ nvm install 5.4
λ nvm use 5.4
```
Create React App doesn't work with node below 6.0 (at least in the last version)
```
λ nvm uninstall 5.4
λ rm -fr C:\Users\AUserName\AppData\Roaming\nvm\v5.4.0\
```

### Too high
OK so I tried the last version of node
```
λ nvm install 9.3
λ nvm use 9.3
```
Version not yet supported
```
λ nvm uninstall 9.3
λ rm -fr C:\Users\AUserName\AppData\Roaming\nvm\v9.3.0\
```

### The right one
It would have been wise to take the latest LTS in the previous step but there is always this guy in my head saying  
"*hey take the latest! It's way more cooler.* u_u".
```
λ nvm install 8.9.3
λ nvm use 8.9.3
```
