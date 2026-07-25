(() => {
  const toolsGrid = document.querySelector('.tools-grid');
  if (!toolsGrid) return;

  const badgeLogo = (label, start = '#9346ff', end = '#297dff') =>
    `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="g" x1="0" x2="1"><stop stop-color="${start}"/><stop offset="1" stop-color="${end}"/></linearGradient></defs><rect width="64" height="64" rx="16" fill="url(#g)"/><text x="32" y="39" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="20" font-weight="700">${label}</text></svg>`)}`;

  const logoSources = {
    'Microsoft 365': 'https://cdn.simpleicons.org/microsoft/5E5E5E',
    'Microsoft Teams': 'https://cdn.simpleicons.org/microsoftteams/6264A7',
    'SharePoint': 'https://cdn.simpleicons.org/microsoftsharepoint/038387',
    'Microsoft Azure': 'https://cdn.simpleicons.org/microsoftazure/0078D4',
    'Power Platform': 'https://cdn.simpleicons.org/powerautomate/0066FF',
    'Rework.com': badgeLogo('R', '#ff6b35', '#ff3366'),
    'Asana': 'https://cdn.simpleicons.org/asana/F06A6A',
    'Monday.com': 'https://cdn.simpleicons.org/mondaydotcom/FFFFFF',
    'Google Workspace': 'https://cdn.simpleicons.org/google/4285F4',
    'GitHub': 'https://cdn.simpleicons.org/github/FFFFFF',
    'Codex': 'https://cdn.simpleicons.org/openai/FFFFFF',
    'Claude': 'https://cdn.simpleicons.org/anthropic/D4A574',
    'ChatGPT': 'https://cdn.simpleicons.org/openai/10A37F',
    'Hermes': badgeLogo('H', '#7c3aed', '#22d3ee'),
    'Power BI': 'https://cdn.simpleicons.org/powerbi/F2C811',
    'Canva': 'https://cdn.simpleicons.org/canva/00C4CC',
    'Figma': 'https://cdn.simpleicons.org/figma/F24E1E'
  };

  const createToolCard = (markText, name, description) => {
    const card = document.createElement('article');
    card.className = 'tool-card';

    const mark = document.createElement('span');
    mark.className = 'tool-mark';
    mark.textContent = markText;

    const content = document.createElement('div');
    const title = document.createElement('strong');
    title.textContent = name;
    const breakElement = document.createElement('br');
    const detail = document.createElement('span');
    detail.textContent = description;

    content.append(title, breakElement, detail);
    card.append(mark, content);
    return card;
  };

  [...toolsGrid.querySelectorAll('.tool-card')].forEach((card) => {
    const title = card.querySelector('strong');
    const name = title?.textContent?.trim();

    if (name === 'Jira') {
      const mark = card.querySelector('.tool-mark');
      const detail = card.querySelector('div span');
      if (mark) mark.textContent = 'RW';
      if (title) title.textContent = 'Rework.com';
      if (detail) detail.textContent = 'Workflow management';
    }

    if (name === 'GLPI') card.remove();

    if (name === 'Generative AI Tools') {
      card.replaceWith(
        createToolCard('CX', 'Codex', 'AI-assisted development'),
        createToolCard('CL', 'Claude', 'AI research and analysis'),
        createToolCard('GPT', 'ChatGPT', 'AI productivity and automation'),
        createToolCard('H', 'Hermes', 'AI agent workflows')
      );
    }
  });

  toolsGrid.classList.remove('tools-grid');
  toolsGrid.classList.add('tools-slider');
  toolsGrid.setAttribute('tabindex', '0');
  toolsGrid.setAttribute('role', 'region');
  toolsGrid.setAttribute('aria-label', 'Tools and software logo carousel. Animation pauses while focused or hovered.');

  const originalCards = [...toolsGrid.querySelectorAll('.tool-card')];
  const track = document.createElement('div');
  track.className = 'tools-slide-track';

  const prepareCard = (card, isClone = false) => {
    card.classList.remove('tool-card');
    card.classList.add('tools-slide');
    const name = card.querySelector('strong')?.textContent?.trim() || 'Technology tool';
    const mark = card.querySelector('.tool-mark');

    if (mark) {
      const image = document.createElement('img');
      image.src = logoSources[name] || badgeLogo(name.slice(0, 2).toUpperCase());
      image.width = 58;
      image.height = 58;
      image.loading = 'lazy';
      image.decoding = 'async';
      image.alt = '';
      image.setAttribute('aria-hidden', 'true');
      mark.replaceWith(image);
    }

    card.setAttribute('aria-label', name);
    if (isClone) {
      card.setAttribute('aria-hidden', 'true');
      card.removeAttribute('aria-label');
    }
    return card;
  };

  originalCards.forEach((card) => track.appendChild(prepareCard(card)));
  originalCards.forEach((card) => track.appendChild(prepareCard(card.cloneNode(true), true)));

  toolsGrid.replaceChildren(track);
})();
