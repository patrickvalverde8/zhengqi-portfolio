// Theme toggle via tagline click with persistence
(function initThemeToggle() {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    root.classList.add('dark');
  }
  document.addEventListener('click', (event) => {
    const target = event.target.closest('[data-role="tagline"]');
    if (!target) return;
    root.classList.toggle('dark');
    localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
  });
})();

// Sticky nav shadow and smooth scroll for internal anchors
(function initNavAndScroll() {
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    const addShadow = window.scrollY > 8;
    nav.classList.toggle('scrolled', addShadow);
  });
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();

// Footer year
(function setYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

// Portfolio slider with smooth transitions
(function initPortfolioSlider() {
  let currentSlide = 0;
  let isTransitioning = false;
  const slides = document.querySelectorAll('.portfolio-slide');
  const indicators = document.querySelectorAll('.indicator');
  const navBtns = document.querySelectorAll('.nav-btn');
  
  function showSlide(index) {
    if (isTransitioning || index === currentSlide) return;
    
    isTransitioning = true;
    
    // 淡出当前幻灯片
    const currentSlideEl = slides[currentSlide];
    const nextSlideEl = slides[index];
    
    if (currentSlideEl && nextSlideEl) {
      // 准备下一张幻灯片
      nextSlideEl.style.display = 'block';
      nextSlideEl.style.opacity = '0';
      nextSlideEl.style.position = 'absolute';
      
      // 强制重排以确保样式生效
      nextSlideEl.offsetHeight;
      
      // 开始过渡
      currentSlideEl.style.opacity = '0';
      nextSlideEl.style.opacity = '1';
      
      setTimeout(() => {
        // 清理旧幻灯片
        slides.forEach((slide, i) => {
          if (i === index) {
            slide.classList.add('active');
            slide.style.position = 'relative';
          } else {
            slide.classList.remove('active');
            slide.style.display = 'none';
            slide.style.opacity = '1';
          }
        });
        
        // 更新指示器
        indicators.forEach((indicator, i) => {
          if (i === index) {
            indicator.classList.add('active');
          } else {
            indicator.classList.remove('active');
          }
        });
        
        currentSlide = index;
        isTransitioning = false;
      }, 500); // 与CSS过渡时间匹配
    }
  }
  
  function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }
  
  function prevSlide() {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
  }
  
  // Navigation buttons
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (isTransitioning) return;
      const dir = parseInt(btn.dataset.dir);
      if (dir === 1) nextSlide();
      else prevSlide();
    });
  });
  
  // Indicators
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      if (isTransitioning) return;
      showSlide(index);
    });
  });
  
  // 初始化第一张幻灯片
  if (slides.length > 0) {
    slides[0].style.display = 'block';
    slides[0].style.opacity = '1';
    slides[0].style.position = 'relative';
  }
})();

// Blog post modal
function openBlogPost(postId) {
  const modal = document.getElementById('blog-modal');
  const content = document.getElementById('blog-content');
  
  const posts = {
    'urban-ai': {
      title: 'From Urban Design to Data Science: Reframing Human-AI Systems',
      date: 'October 2025',
      content: `
        <h2>From Urban Design to Data Science: Reframing Human-AI Systems</h2>
        <p class="meta">October 2025 • 8 min read</p>
        
        <p>The transition from architectural design to algorithmic systems represents more than a career pivot—it's a fundamental shift in how we understand the relationship between space, data, and human experience.</p>
        
        <h3>The Spatial Foundation</h3>
        <p>My journey began in architecture, where I learned to think about space as a medium for human interaction. Every design decision—from the placement of a window to the flow of circulation—shapes how people move, feel, and connect. This spatial thinking became the foundation for my approach to AI systems.</p>
        
        <h3>Data as Material</h3>
        <p>In transitioning to data science, I discovered that data behaves much like architectural materials. Just as concrete has properties of strength and flexibility, data has qualities of accuracy, bias, and representativeness. The challenge lies in understanding these properties and designing systems that work with, rather than against, them.</p>
        
        <h3>Human-Centered Intelligence</h3>
        <p>The most important lesson from architecture is that good design serves people, not the other way around. This principle becomes even more critical in AI, where the temptation to optimize for technical metrics can overshadow human needs. Every algorithm should ask: how does this serve the people who will use it?</p>
        
        <p>As we build increasingly sophisticated AI systems, the spatial thinking of architecture offers a valuable framework for creating technology that truly understands and serves human experience.</p>
      `
    },
    'allotech-story': {
      title: 'Building AlloTech: Designing for Manufacturability through AI',
      date: 'September 2025',
      content: `
        <h2>Building AlloTech: Designing for Manufacturability through AI</h2>
        <p class="meta">September 2025 • 12 min read</p>
        
        <p>The story of AlloTech begins with a simple observation: the gap between what designers imagine and what manufacturers can produce has never been wider. As design tools become more sophisticated, the disconnect between creative vision and manufacturing reality grows.</p>
        
        <h3>The Manufacturing Constraint Problem</h3>
        <p>Traditional design workflows treat manufacturing as an afterthought. Designers create, then engineers figure out how to make it real. This linear process leads to countless iterations, compromised designs, and frustrated teams. We saw an opportunity to flip this relationship.</p>
        
        <h3>Geometry Encoding and Diffusion Models</h3>
        <p>Our approach combines geometry encoding with multimodal diffusion models to generate designs that are inherently manufacturable. By training on vast datasets of successful manufactured products, our AI learns the implicit rules of what can and cannot be made.</p>
        
        <h3>The Human Element</h3>
        <p>But technology alone isn't enough. The real challenge is creating tools that enhance rather than replace human creativity. Our interface allows designers to explore the space of manufacturable possibilities while maintaining creative control over the final outcome.</p>
        
        <h3>Looking Forward</h3>
        <p>As we continue to develop AlloTech, we're constantly reminded that the best AI tools are invisible—they amplify human capability without getting in the way. The future of design isn't about replacing designers with algorithms, but about giving designers superpowers.</p>
      `
    }
  };
  
  if (posts[postId]) {
    content.innerHTML = posts[postId].content;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

function closeBlogPost() {
  const modal = document.getElementById('blog-modal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  const modal = document.getElementById('blog-modal');
  if (e.target === modal) {
    closeBlogPost();
  }
});

// Simple CV image display - no complex PDF viewer needed

// 高级鼠标交互：丝滑的透明度、浮动和缩放效果
(function initAdvancedWordInteraction() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  
  const words = document.querySelectorAll('.bg-word');
  if (words.length === 0) return;
  
  let mouseX = null;
  let mouseY = null;
  let isHovering = false;
  const influenceRadius = 350; // 影响半径
  const maxOpacity = 0.9; // 最大透明度
  const minOpacity = 0.45; // 最小透明度
  const maxDarkOpacity = 0.3; // 暗色模式最大透明度
  const maxScale = 1.15; // 最大缩放
  const minScale = 1.0; // 最小缩放
  const maxFloat = 12; // 最大浮动距离
  
  // 为每个词生成独特的动画参数
  const wordConfigs = [];
  words.forEach((word, index) => {
    const config = {
      element: word,
      // 每个词不同的浮动方向（角度）
      floatAngle: (index * 45 + Math.random() * 30 - 15) * Math.PI / 180,
      // 不同的响应速度
      responseSpeed: 0.06 + Math.random() * 0.04,
      // 不同的缩放敏感度
      scaleMultiplier: 0.8 + Math.random() * 0.4,
      // 不同的透明度敏感度
      opacityMultiplier: 0.7 + Math.random() * 0.6,
      // 当前状态
      currentOpacity: minOpacity,
      currentScale: minScale,
      currentFloatX: 0,
      currentFloatY: 0,
      // 目标状态
      targetOpacity: minOpacity,
      targetScale: minScale,
      targetFloatX: 0,
      targetFloatY: 0
    };
    wordConfigs.push(config);
    
    // 设置初始样式
    word.style.opacity = minOpacity;
    word.style.transform = word.style.transform || '';
    word.style.transition = 'none'; // 禁用CSS过渡，使用JS控制
  });
  
  // 获取当前主题
  function isDarkMode() {
    return document.documentElement.classList.contains('dark');
  }
  
  let rafId = null;
  
  // 获取元素中心点
  function getElementCenter(el) {
    const rect = el.getBoundingClientRect();
    const heroRect = hero.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2 - heroRect.left,
      y: rect.top + rect.height / 2 - heroRect.top
    };
  }
  
  // 计算两点距离
  function getDistance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }
  
  // 平滑插值函数
  function lerp(start, end, factor) {
    return start + (end - start) * factor;
  }
  
  // 缓动函数（更自然的过渡）
  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }
  
  // 更新所有效果
  function updateEffects() {
    let hasChanges = false;
    
    wordConfigs.forEach(config => {
      const { element } = config;
      
      if (!isHovering || mouseX === null || mouseY === null) {
        // 鼠标不在区域，恢复到默认状态
        config.targetOpacity = minOpacity;
        config.targetScale = minScale;
        config.targetFloatX = 0;
        config.targetFloatY = 0;
      } else {
        // 计算鼠标到词语的距离和影响
        const center = getElementCenter(element);
        const distance = getDistance(mouseX, mouseY, center.x, center.y);
        
        if (distance <= influenceRadius) {
          // 在影响范围内，计算各种效果
          const rawRatio = 1 - (distance / influenceRadius);
          const easedRatio = easeOutCubic(rawRatio);
          
          // 透明度效果
          const opacityRange = (isDarkMode() ? maxDarkOpacity : maxOpacity) - minOpacity;
          config.targetOpacity = minOpacity + opacityRange * easedRatio * config.opacityMultiplier;
          
          // 缩放效果
          const scaleRange = maxScale - minScale;
          config.targetScale = minScale + scaleRange * easedRatio * config.scaleMultiplier;
          
          // 浮动效果（每个词向不同方向浮动）
          const floatDistance = maxFloat * easedRatio;
          config.targetFloatX = Math.cos(config.floatAngle) * floatDistance;
          config.targetFloatY = Math.sin(config.floatAngle) * floatDistance;
        } else {
          // 超出影响范围，恢复默认
          config.targetOpacity = minOpacity;
          config.targetScale = minScale;
          config.targetFloatX = 0;
          config.targetFloatY = 0;
        }
      }
      
      // 平滑过渡到目标值
      const speed = config.responseSpeed;
      
      // 透明度过渡
      if (Math.abs(config.currentOpacity - config.targetOpacity) > 0.001) {
        config.currentOpacity = lerp(config.currentOpacity, config.targetOpacity, speed);
        hasChanges = true;
      } else {
        config.currentOpacity = config.targetOpacity;
      }
      
      // 缩放过渡
      if (Math.abs(config.currentScale - config.targetScale) > 0.001) {
        config.currentScale = lerp(config.currentScale, config.targetScale, speed);
        hasChanges = true;
      } else {
        config.currentScale = config.targetScale;
      }
      
      // 浮动过渡
      if (Math.abs(config.currentFloatX - config.targetFloatX) > 0.1 || 
          Math.abs(config.currentFloatY - config.targetFloatY) > 0.1) {
        config.currentFloatX = lerp(config.currentFloatX, config.targetFloatX, speed);
        config.currentFloatY = lerp(config.currentFloatY, config.targetFloatY, speed);
        hasChanges = true;
      } else {
        config.currentFloatX = config.targetFloatX;
        config.currentFloatY = config.targetFloatY;
      }
      
      // 应用样式
      element.style.opacity = config.currentOpacity;
      
      // 保持原有的浮动动画，添加鼠标交互的变换
      const baseTransform = element.style.transform.replace(/translate\([^)]*\)\s*scale\([^)]*\)/g, '').trim();
      const newTransform = `${baseTransform} translate(${config.currentFloatX}px, ${config.currentFloatY}px) scale(${config.currentScale})`;
      element.style.transform = newTransform;
    });
    
    // 如果还有变化，继续动画
    if (hasChanges || isHovering) {
      rafId = requestAnimationFrame(updateEffects);
    } else {
      // 动画完成，清除rafId
      rafId = null;
    }
  }
  
  // 鼠标移动事件
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
    
    if (!isHovering) {
      isHovering = true;
      if (!rafId) {
        updateEffects();
      }
    }
  });
  
  // 鼠标离开事件
  hero.addEventListener('mouseleave', () => {
    isHovering = false;
    mouseX = null;
    mouseY = null;
    
    // 确保恢复动画继续运行
    if (!rafId) {
      updateEffects();
    }
  });
  
  // 防止点击事件干扰动画
  document.addEventListener('click', (e) => {
    // 如果点击的不是hero区域，确保动画继续运行
    if (!hero.contains(e.target) && !rafId && !isHovering) {
      // 重新启动动画循环以确保恢复动画正常运行
      updateEffects();
    }
  });
  
  // 主题切换时重新计算
  const observer = new MutationObserver(() => {
    if (isHovering && rafId) {
      // 主题变化时重新触发计算
      updateEffects();
    }
  });
  
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  });
  
  // 初始化
  updateEffects();
})();


