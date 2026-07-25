(() => {
  const toolsGrid = document.querySelector('.tools-grid');
  if (!toolsGrid) return;

  const logoSources = {
    'Microsoft 365': 'https://cdn.simpleicons.org/microsoft/5E5E5E',
    'Microsoft Teams': 'https://cdn.simpleicons.org/microsoftteams/6264A7',
    'SharePoint': 'https://cdn.simpleicons.org/microsoftsharepoint/038387',
    'Microsoft Azure': 'https://cdn.simpleicons.org/microsoftazure/0078D4',
    'Power Platform': 'https://cdn.simpleicons.org/powerautomate/0066FF',
    'Jira': 'https://cdn.simpleicons.org/jira/0052CC',
    'Asana': 'https://cdn.simpleicons.org/asana/F06A6A',
    'Monday.com': 'https://cdn.simpleicons.org/mondaydotcom/FFFFFF',
    'GLPI': 'https://cdn.simpleicons.org/glpi/FFFFFF',
    'Google Workspace': 'https://cdn.simpleicons.org/google/4285F4',
    'GitHub': 'https://cdn.simpleicons.org/github/FFFFFF',
    'Generative AI Tools': 'https://cdn.simpleicons.org/openai/FFFFFF',
    'Power BI': 'https://cdn.simpleicons.org/powerbi/F2C811',
    'Canva': 'https://cdn.simpleicons.org/canva/00C4CC',
    'Figma': 'https://cdn.simpleicons.org/figma/F24E1E'
  };

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
      image.src = logoSources[name] || `https://cdn.simpleicons.org/${name.toLowerCase().replace(/[^a-z0-9]/g, '')}/FFFFFF`;
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
