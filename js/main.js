document.addEventListener('click', async (e) => {
  const btn = e.target.closest('.btn-copy');
  if (!btn) return;

  await navigator.clipboard.writeText(window.location.href);
  alert('링크가 복사되었습니다.');
});