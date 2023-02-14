---
title: mxGraph导出svg图形
description: 先获取mxGraph节点数据，也就是xml信息，在后端通过mxXmlUtils.parseXml将xml转换为svg。
keywords: ["mxGraph"]
date: 2023-01-29
authors: heshibin
tags: [java]
---

先获取mxGraph节点数据，也就是xml信息，在后端通过`mxXmlUtils.parseXml`将xml转换为svg。

#### 前端
```javascript
var encoder = new mxCodec(mxUtils.createXmlDocument());
var node = encoder.encode(graph.getModel());
var xml = mxUtils.getPrettyXml(node);
console.log(encodeURIComponent(xml));
new mxXmlRequest("后端地址", 'xml=' + encodeURIComponent(xml))
    .simulate(document, '_blank');
```

#### 后端
```java
public void exportNode(@RequestParam(value = "xml") String xml,
                           HttpServletResponse response) {
    try {
        xml = URLDecoder.decode(xml);

        if (StringUtils.contains(xml, "&amp;apos;")) {
            xml = xml.replaceAll("&amp;apos;", "'");
        }
        if (StringUtils.contains(xml, "&quot;")) {
            xml = xml.replaceAll("&quot;", "\"");
        }
        if (StringUtils.contains(xml, "&lt;")) {
            xml = xml.replaceAll("&lt;", "<");
        }
        if (StringUtils.contains(xml, "&gt;")) {
            xml = xml.replaceAll("&gt;", ">");
        }

        mxGraph graph = new mxGraph();
        Document doc = com.mxgraph.util.mxXmlUtils.parseXml(xml);
        mxCodec codec = new mxCodec(doc);
        codec.decode(doc.getDocumentElement(), graph.getModel());

        // Renders graph to SVG
        mxSvgCanvas canvas = (mxSvgCanvas) mxCellRenderer.drawCells(graph,
                null, 1, null, new mxCellRenderer.CanvasFactory()
                {
                    public mxICanvas createCanvas(int width, int height)
                    {
                        return new mxSvgCanvas(com.mxgraph.util.mxDomUtils
                                .createSvgDocument(width, height));
                    }
                });

        String tmp = System.getProperty("java.io.tmpdir");
        SimpleDateFormat df = new SimpleDateFormat("yyyyMMddHHmmss");
        String fileName = df.format(new Date()) + ".svg";
        String filePath = tmp +"/"+ fileName;
        com.mxgraph.util.mxUtils.writeFile(com.mxgraph.util.mxXmlUtils.getXml(canvas.getDocument()), filePath);


        InputStream fis = null;
        OutputStream outputStream = null;
        try {
            File file = new File(filePath);
            // 定义文件的输入流
            fis = new BufferedInputStream(new FileInputStream(new File(filePath)));
            // 定义一个缓冲区
            byte[] buffer = new byte[fis.available()];
            // 把流写入byte缓冲区
            fis.read(buffer);
            // 关闭文件流
            fis.close();
            // 清空response
            response.reset();
            // 设置response的Header
            // 防止中文乱码
            String finalFileName = new String(fileName.getBytes("GBK"), "ISO8859-1");
            // 设值返回文件属性，浏览器会根据属性调用下载文件方法
            response.addHeader("Content-Disposition", "attachment;filename=" + finalFileName);
            // 设值文件大小属性，浏览器用于判断文件是否写完
            response.addHeader("Content-Length", "" + file.length());
//                // 前端获取文件名，需要解码
//                response.addHeader("downLoadName", URLEncoder.encode(fileName, "UTF-8"));
            // 定义输出流
            outputStream = new BufferedOutputStream(response.getOutputStream());
            // 定义输出类型为二进制流输出
            response.setContentType("application/octet-stream");
            // 把流写入response
            outputStream.write(buffer);
            // flush落盘
            outputStream.flush();
            // 关闭输出流
            outputStream.close();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (fis != null) {
                fis.close();
            }
            if (outputStream != null) {
                outputStream.close();
            }
        }
//            BufferedImage image = ImageIO.read(new File(filePath));
//            ImageIO.write(image, "svg", response.getOutputStream());
    } catch (IOException e) {
        e.printStackTrace();
    }
}
```
