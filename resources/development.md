# development

1. 展示工具条和用户个人文件夹的html代码

2. 通过nodejs找到用户文件夹所在的路径

```html
<script>
    document.write(require('osenv').home())
</script>
```

3. 显示用户个人文件夹中的文件和文件夹


笔记文件在 WPS 云