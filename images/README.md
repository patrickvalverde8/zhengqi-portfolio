# 图片存储结构说明

## 📁 目录结构

```
images/
├── portraits/          # 个人头像和肖像照片
│   └── profile.jpg     # 主要头像 (建议尺寸: 400x400px, 会自动裁切为圆形)
├── portfolio/          # 作品集和项目图片
│   ├── allotech-platform.jpg      # AlloTech平台截图 (建议尺寸: 1200x400px)
│   ├── bytedance-ml.jpg           # ByteDance项目图片
│   ├── meituan-llm.jpg            # Meituan项目图片
│   ├── arcasia-thesis.jpg         # ARCASIA获奖论文图片 (建议尺寸: 1400x800px)
│   ├── uia-hop-cup.jpg            # UIA Hop Cup获奖作品
│   ├── ai-office-system.jpg       # AI办公系统图片
│   ├── urban-perception.jpg       # 城市感知分析项目
│   └── green-office.jpg           # 绿色办公设计项目
└── leadership/         # 领导力和团队照片
    ├── team-leadership.jpg        # 团队领导照片 (建议尺寸: 600x400px)
    └── outdoor-adventures.jpg     # 户外探险照片
```

## 🖼️ 图片规格建议

### 头像照片 (portraits/)
- **profile.jpg**: 400x400px, JPG格式
- 会自动裁切为圆形，确保人脸居中
- 建议使用高质量、光线良好的正面照

### 作品集图片 (portfolio/)
- **项目展示图**: 1200x400px (横向比例 3:1)
- **作品详情图**: 1400x800px (横向比例 7:4)
- **研究项目图**: 600x300px (横向比例 2:1)
- 格式: JPG 或 PNG
- 建议文件大小控制在 500KB 以内

### 领导力照片 (leadership/)
- **团队照片**: 600x400px (横向比例 3:2)
- 格式: JPG
- 建议展现团队合作或领导场景

## 🔄 图片替换步骤

1. **准备图片**: 按照上述规格准备图片文件
2. **命名文件**: 使用对应的文件名 (如 profile.jpg)
3. **放置文件**: 将图片放入对应的子目录
4. **刷新页面**: 浏览器会自动加载新图片

## 🎨 自动样式处理

- **头像**: 自动裁切为圆形，添加边框
- **作品图**: 自动添加圆角和阴影效果
- **响应式**: 所有图片都会根据屏幕尺寸自动调整

## 📝 注意事项

- 图片文件名必须与HTML中的路径完全匹配
- 建议使用JPG格式以获得更好的加载性能
- 确保图片质量清晰，避免模糊或像素化
- 可以使用在线工具调整图片尺寸: https://www.iloveimg.com/resize-image
