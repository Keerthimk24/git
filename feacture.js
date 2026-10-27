
.debate-pager {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-block-start: 12px;
  margin-block-end: 12px;
  padding: 8px 10px;
  border: 1px solid var(--polimik-line);
  border-radius: var(--radius-md);
  background: var(--polimik-surface);
}
.pager-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
  border: 1px solid var(--polimik-line-strong);
  border-radius: 50%;
  background: var(--polimik-surface);
  color: var(--polimik-link);
  font-size: 20px;
  line-height: 1;
  transition: background-color 120ms ease, border-color 120ms ease;
}
.pager-arrow:not(:disabled):hover { background: var(--soft-accent); border-color: var(--polimik-accent); }
.pager-body { display: flex; align-items: center; justify-content: flex-start; min-width: 0; flex: 1; }
.pager-question {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: