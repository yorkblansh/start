FROM node:18

RUN apt update && apt install vim curl sudo fish tmux exa -y && \
	echo "fish" >>~/.bashrc

RUN LAZYGIT_VERSION=$(curl -s "https://api.github.com/repos/jesseduffield/lazygit/releases/latest" | grep -Po '"tag_name": "v\K[^"]*') && \
	curl -Lo lazygit.tar.gz "https://github.com/jesseduffield/lazygit/releases/latest/download/lazygit_${LAZYGIT_VERSION}_Linux_x86_64.tar.gz" && \
	tar xf lazygit.tar.gz lazygit && \
	install lazygit /usr/local/bin

RUN echo 'root:123' | chpasswd
RUN echo 'node:123' | chpasswd

RUN sudo usermod -a -G sudo node

USER node

# customize tmux
RUN cd && \
	git clone https://github.com/gpakosz/.tmux.git && \
	ln -s -f .tmux/.tmux.conf && \
	cp .tmux/.tmux.conf.local .


RUN curl https://raw.githubusercontent.com/oh-my-fish/oh-my-fish/master/bin/install | fish
RUN fish -c "omf i z fishy-drupal"

RUN echo "fish" >>~/.bashrc
RUN mkdir -p ~/.config/fish
RUN echo "alias la='exa -l -h -F -a -g -m'" >>~/.config/fish/config.fish
RUN echo "alias tmux='tmux -2'" >>~/.config/fish/config.fish
RUN echo "set -g default-terminal 'xterm-256color' \n set-option -ga terminal-overrides ',xterm-256color:Tc'" >>~/.tmux.conf

WORKDIR /app

ENV PORT=5055

EXPOSE 5055




