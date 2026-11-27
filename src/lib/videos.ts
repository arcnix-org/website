import { translate, type Locale } from './site';

export function videos(locale: Locale) {
  const t = translate(locale);
  return [
    { slug: 'local-logs', media: 'logging-tour', duration: '0:19', title: t('Save activity logs', '把操作日志保存到本机'), description: t('In Arcnix 0.3.11 for Windows, turn on local logging, choose a file size and set how many old logs to keep.', '在 Windows 版阿牛桌面 0.3.11 中开启自动保存，调整每个文件的大小上限和旧日志保留数量。'), guide: 'logging' },
    { slug: 'file-transfer', media: 'transfer-tour', duration: '0:21', title: t('Transfer files over SFTP', '通过 SFTP 上传和下载'), description: t('Upload an archive, pause and resume the transfer, then download a log bundle from the server.', '上传压缩包，在队列中暂停、继续传输，再把服务器上的日志包下载到本机。'), guide: 'workspace' },
    { slug: 'remote-editor', media: 'workspace-tour', duration: '0:21', title: t('Edit a remote document', '编辑远程文档'), description: t('Open a handover note in Code, save it to the server and read the Markdown preview alongside the source.', '用 Code 编辑交接文档，保存到服务器，在源码旁边查看 Markdown 预览。'), guide: 'workspace' },
    { slug: 'docker', media: 'docker-tour', duration: '0:21', title: t('Inspect a Docker container', '检查 Docker 容器'), description: t('Start a stopped container, read its logs and inspect its mounts and published ports.', '启动已停止的容器，读取日志，检查挂载和已发布的端口。'), guide: 'monitor-docker' },
    { slug: 'monitor', media: 'monitor-tour', duration: '0:18', title: t('Read a service log', '查看服务日志'), description: t('Follow network activity in Monitor, then select a systemd service and read its journal.', '在监控中查看网络活动，选择 systemd 服务并读取日志。'), guide: 'monitor-docker' },
    { slug: 'images-pdf', media: 'viewers-tour', duration: '0:22', title: t('Browse photos and PDFs', '浏览图片和 PDF'), description: t('Move between images in a remote folder, then open a PDF, turn the page and fit it to the window.', '浏览远程目录中的多张图片，再打开 PDF、翻页并调整页面宽度。'), guide: 'workspace' },
    { slug: 'video-player', media: 'player-tour', duration: '0:15', title: t('Play a remote video', '播放远程视频'), description: t('Open an MP4 over SFTP on Windows, maximize the player and seek to another point in the video.', '在 Windows 上通过 SFTP 打开 MP4，最大化播放器并拖动进度条跳播。'), guide: 'workspace' },
  ];
}
export type Video = ReturnType<typeof videos>[number];
