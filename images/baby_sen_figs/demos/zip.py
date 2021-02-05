import zipfile

zipf = zipfile.ZipFile('./target.zip', 'w', allowZip64=True)
zipf.write('./ftp.py')
zipf.write('./walkdir.py')
zipf.close()
