from ftpsync.targets import FsTarget
from ftpsync.ftp_target import FtpTarget
from ftpsync.synchronizers import UploadSynchronizer

local = FsTarget('C:\\temp')
user = 'user'
passwd = 'pwd'
remote = FtpTarget("/foo", "ftp.svr.com", username=user, password=passwd)
opts = {"force": True, "delete_unmatched": True, "verbose": 3}
s = UploadSynchronizer(local, remote, opts)
s.run()