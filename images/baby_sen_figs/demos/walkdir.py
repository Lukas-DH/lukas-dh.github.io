import os

for fn, sflds, fnames in os.walk('C:\\Personal'):
    print('Current folder is ' + fn)
    for sf in sflds:
        print(sf + ' is a subfolder of ' + fn)
    for fname in fnames:
        print(fname + ' is a file of ' + fn)
    print('')