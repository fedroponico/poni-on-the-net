import os
import json

j = open('../proj.json')
data = json.load(j)

lista = []
listaUrl = []
for e in range(len(data)):
    for ee in range(len(data[e])):
        if data[e][ee]['titolo'] != '' :
            lista.append(data[e][ee]['titolo'])
            print('ok')
        else:
            print('oksss')
        if data[e][ee]['url'] != '' :
            listaUrl.append(data[e][ee]['url'])
        else:
            continue
    
    
print(lista)

z = 0
listLink = ''

for p in lista:
    listLink += f'<a href="../{p}/">{p}</a><br>'
print(listLink)

for n in lista:
    owd = os.getcwd()
    os.mkdir(listaUrl[z])
    os.chdir(listaUrl[z])
    f = open("index.html", "w")
    f.write(f'''
    
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <!-- <meta property="og:image" content="http://www.federicoponi.it/assets/img/"> -->
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Federico Poni | {n}</title>
    <link rel="stylesheet" href="../../style.css" />
        <link rel="stylesheet" href="../styleProj.css" />
    <!-- <script src="../../script/core.js"></script> -->

</head>

<body>

    <div class="proj">
        {listLink}
    </div>

    <div class="button">
        <button id="toggle" onclick="dark()">

    <?xml version="1.0" encoding="UTF-8"?>
    <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">
      <g>
        <path fill="none" stroke="#000000" stroke-width="2.4" stroke-miterlimit="10" d="M24,24l12,20.8 M24,24h24 M24,24l20.8,12 M24,24   h24 M24,24L36,3.2 M24,24l20.8-12 M24,24L36,3.2 M24,24L12,3.2 M24,24V0 M24,24L12,3.2 M24,24H0 M24,24L3.2,12 M24,24H0 M24,24   L12,44.8 M24,24L3.2,36 M24,24L12,44.8 M24,24l12,20.8 M24,24v24"/>
      </g>
    </svg>

    </button>
    </div>




    <div class="menus">
        <a href="projects/"><button class="projects">Projects</button></a>
        <a href="bio/"><button class="bio">Bio</button></a>
        <a href="http://funix.xyz" target="_blank"><button class="wiki">WIKI</button></a>

    </div>




    <div class="viewport">
        <div class="scene3D-container">
            <div class="scene3D">
            </div>
        </div>
    </div>


    <script src="../../script/axios.min.js" defer></script>
    <script src="../../script/dark.js" defer></script>
    <script src="../../script/three.js"></script>
    <script>
        three({z})
    </script>
</body>


</html>
    
    ''')
    
    f.close()
    os.chdir(owd)
    z=z+1
