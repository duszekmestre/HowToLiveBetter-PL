import glob,re,sys
f='book/13-紧急情况.md'
lines=open(f,encoding='utf-8').read().split('\n')
n=0
for p in sorted(glob.glob('_pl13/p*.txt')):
    cur=None
    for l in open(p,encoding='utf-8').read().split('\n'):
        m=re.match(r'^@@(\d+)$',l)
        if m: cur=int(m.group(1)); continue
        if cur is not None and l!='':
            lines[cur-1]=l; n+=1; cur=None
open(f,'w',encoding='utf-8').write('\n'.join(lines))
print(n)
